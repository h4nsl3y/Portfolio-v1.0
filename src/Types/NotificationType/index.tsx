export default interface NotificationProps {
    title: string,
    contentType: "href" | "text" | "email",
    content: string,
  }