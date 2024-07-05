export default interface NotificationType {
    title: string,
    contentType: "href" | "text" | "email",
    content: string,
  }