/*     */ package database;
/*     */ 
/*     */ import com.mysql.jdbc.Statement;
/*     */ import java.io.FileReader;
/*     */ import java.io.IOException;
/*     */ import java.io.PrintStream;
/*     */ import java.sql.Connection;
/*     */ import java.sql.DriverManager;
/*     */ import java.sql.ResultSet;
/*     */ import java.sql.SQLException;
/*     */ import java.util.HashMap;
/*     */ import java.util.Properties;
/*     */ 
/*     */ public class DatabaseConnectionWZ
/*     */ {
/*  16 */   private static final HashMap<Integer, ConWrapper> connections = new HashMap();
/*     */   private static String dbDriver;
/*     */   private static String dbUrl;
/*     */   private static String dbUser;
/*     */   private static String dbPass;
/*  21 */   private static boolean propsInited = false;
/*  22 */   private static Properties dbProps = new Properties();
/*  23 */   private static long connectionTimeOut = 300000L;
/*     */   public static final int CLOSE_CURRENT_RESULT = 1;
/*     */   public static final int KEEP_CURRENT_RESULT = 2;
/*     */   public static final int CLOSE_ALL_RESULTS = 3;
/*     */   public static final int SUCCESS_NO_INFO = -2;
/*     */   public static final int EXECUTE_FAILED = -3;
/*     */   public static final int RETURN_GENERATED_KEYS = 1;
/*     */   public static final int NO_GENERATED_KEYS = 2;
/*     */ 
/*     */   public static Connection getConnection()
/*     */   {
/*  33 */     Thread cThread = Thread.currentThread();
/*  34 */     int threadID = (int)cThread.getId();
/*  35 */     ConWrapper ret = (ConWrapper)connections.get(Integer.valueOf(threadID));
/*  36 */     if (ret == null) {
/*  37 */       Connection retCon = connectToDB();
/*  38 */       ret = new ConWrapper(retCon);
/*  39 */       ret.id = threadID;
/*  40 */       connections.put(Integer.valueOf(threadID), ret);
/*     */     }
/*     */ 
/*  43 */     return ret.getConnection();
/*     */   }
/*     */ 
/*     */   private static long getWaitTimeout(Connection con) {
/*  47 */     Statement stmt = null;
/*  48 */     ResultSet rs = null;
/*     */     try {
/*  50 */       stmt = (Statement)con.createStatement();
/*  51 */       rs = stmt.executeQuery("SHOW VARIABLES LIKE 'wait_timeout'");
/*     */       long l1;
/*  52 */       if (rs.next()) {
/*  53 */         return Math.max(1000, rs.getInt(2) * 1000 - 1000);
/*     */       }
/*  55 */       return -1L;
/*     */     }
/*     */     catch (SQLException ex) {
/*  58 */       return -1L;
/*     */     } finally {
/*  60 */       if (stmt != null)
/*     */         try {
/*  62 */           stmt.close();
/*     */         } catch (SQLException ex1) {
/*     */         } finally {
/*  65 */           if (rs != null)
/*     */             try {
/*  67 */               rs.close();
/*     */             }
/*     */             catch (SQLException ex1)
/*     */             {
/*     */             }
/*     */         }
/*     */     }
/*     */   }
/*     */ 
/*     */   private static Connection connectToDB() {
/*  77 */     if (!propsInited) {
/*     */       try {
/*  79 */         FileReader fR = new FileReader("db.properties");
/*  80 */         dbProps.load(fR);
/*  81 */         fR.close();
/*     */       } catch (IOException ex) {
/*  83 */         System.out.println("[WZDB信息] Unable to start server: Error reading from db.properties.");
/*     */       }
/*  85 */       dbDriver = dbProps.getProperty("driver");
/*  86 */       dbUrl = dbProps.getProperty("wzdburl");
/*  87 */       dbUser = dbProps.getProperty("user");
/*  88 */       dbPass = dbProps.getProperty("password");
/*     */       try {
/*  90 */         connectionTimeOut = Long.parseLong(dbProps.getProperty("timeout"));
/*     */       } catch (Exception e) {
/*  92 */         System.out.println("[WZDB信息] Cannot read Timeout Information, using default: " + connectionTimeOut + " ");
/*     */       }
/*     */     }
/*     */     try {
/*  96 */       Class.forName(dbDriver);
/*     */     } catch (ClassNotFoundException e) {
/*  98 */       System.out.println("[WZDB信息] Could not locate the JDBC mysql driver.");
/*     */     }
/*     */     try {
/* 101 */       Connection con = DriverManager.getConnection(dbUrl, dbUser, dbPass);
/* 102 */       if (!propsInited) {
/* 103 */         long timeout = getWaitTimeout(con);
/* 104 */         if (timeout != -1L) {
/* 105 */           connectionTimeOut = timeout;
/*     */         }
/*     */ 
/* 108 */         propsInited = true;
/*     */       }
/* 110 */       return con;
/*     */     } catch (SQLException e) {
/* 112 */       throw new DatabaseException(e);
/*     */     }
/*     */   }
/*     */ 
/*     */   public static void closeAll() throws SQLException
/*     */   {
/* 118 */     for (ConWrapper con : connections.values()) {
/* 119 */       con.connection.close();
/*     */     }
/* 121 */     connections.clear();
/*     */   }
/*     */   public static class ConWrapper {
/* 126 */     private long lastAccessTime = 0L;
/*     */     private Connection connection;
/*     */     private int id;
/*     */ 
/*     */     public ConWrapper(Connection con) {
/* 131 */       this.connection = con;
/*     */     }
/*     */ 
/*     */     public Connection getConnection() {
/* 135 */       if (expiredConnection()) {
/* 136 */         System.out.println("[WZDB信息] 链接 " + this.id + " 已经超时.重新链接...");
/*     */         try {
/* 138 */           this.connection.close();
/*     */         } catch (Throwable err) {
/*     */         }
/* 141 */         connection = connectToDB();
/*     */       }
/* 143 */       this.lastAccessTime = System.currentTimeMillis();
/* 144 */       return this.connection;
/*     */     }
/*     */ 
/*     */     public boolean expiredConnection() {
/* 148 */       if (this.lastAccessTime == 0L)
/* 149 */         return false;
/*     */       try
/*     */       {
/* 152 */         return (System.currentTimeMillis() - this.lastAccessTime >= DatabaseConnectionWZ.connectionTimeOut) || (this.connection.isClosed());
/*     */       } catch (Throwable ex) {
/*     */       }
/* 155 */       return true;
/*     */     }
/*     */   }
/*     */ }