import styles from "./search-box.module.css";

export default function SearchBox({ loginStatus }) {
  return (
    <div className={styles.searchBox}>
      <form>
        <input type="text" placeholder="..." name="search" />
        <button>create</button>
      </form>
    </div>
  );
}
