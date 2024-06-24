#!/usr/bin/python3

import MySQLdb
import sys


if __name__ == "__main__":
    mysqlUsername = sys.argv[1]
    mysqlPassword = sys.argv[2]
    dbName = sys.argv[3]

    try:
        conn = MySQLdb.connect(
            host="localhost",
            port=3306,
            user=mysqlUsername,
            passwd=mysqlPassword,
            db=dbName,
            charset="utf8"
        )
    except MySQLdb.Error as E:
        print("Error connecting to database: {}".format(E))
        sys.exit(1)

    cur = conn.cursor()
    cur.execute("SELECT * FROM states ORDER BY id ASC")
    rows = cur.fetchall()

    for row in rows:
        print(row)

    cur.close()
    conn.close()
