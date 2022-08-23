import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Table.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";



const Table = ({ users }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <div className={styles.table__container}>
      <input
        type="text"
        className={styles.field}
        placeholder="Search User by name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.table__wrapper}>
        <table className={styles.table}>
          <tr
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <th>User</th>
            <th>Email</th>
            <th>Rank</th>
            <th>NID</th>
            <th>JOIN</th>
            <th>FIL</th>
            <th>LTC</th>
            <th>BNB</th>
            <th>Package</th>
            <th>Country</th>
            <th>Revenue</th>
            <th>Team</th>
          </tr>
          {users
            .filter((user) =>
              user.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((user) => (
              <tr
                initial={{ opacity: 0, x: 30 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
                }}
                className={styles.row}
              >
                <td onClick={() => router.push(`/profile/${user._id}`)}>
                  {user.picture && (
                    <Image src={user?.picture} width={30} height={30} alt="" />
                  )}
                  <span>{user.name}</span>
                </td>
                <td>{user.email}</td>
                <td>{user.Nid}</td>
                <td>{user.Join}</td>
                <td>{user.fil}</td>
                <td>{user.ltc}</td>
                <td>{user.bnb}</td>
                {/* <td>{user.paymentHistory}</td> */}
                <td>{user.country}</td>
                <td>{user.revenue}</td>
                <td>{user.teamMembers}</td>
                <td>{user.totalAsset}</td>
                <td>{user.Purchase}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
