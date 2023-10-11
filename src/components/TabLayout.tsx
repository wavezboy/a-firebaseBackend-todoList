"use client";
import Input from "./Input";
import DeleteBox from "./DeleteBox";

interface Lay {
  uid: string;
  children: string;
}

export default function TabLayout({ children, uid }: Lay) {
  return (
    <>
      <Input uid="" />
      {children}
      <DeleteBox uid="" />
    </>
  );
}
