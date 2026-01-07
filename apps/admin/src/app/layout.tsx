import "devextreme/dist/css/dx.material.blue.light.compact.css";
import { locale, loadMessages } from "devextreme/localization";

const mnMessages = {
  mn: {
    Yes: "Тийм",
    No: "Үгүй",
    Search: "Хайх...",
  }
};

loadMessages(mnMessages);
locale("mn");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}