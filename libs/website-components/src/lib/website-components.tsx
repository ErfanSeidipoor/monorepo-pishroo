import styles from "./website-components.module.css";

/* eslint-disable-next-line */
export interface WebsiteComponentsProps {}

export function WebsiteComponents(props: WebsiteComponentsProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to WebsiteComponents!</h1>
    </div>
  );
}

export default WebsiteComponents;
