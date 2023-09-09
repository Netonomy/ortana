import Image from "next/image";

export default function KeyLogo(props: {
  height?: number;
  width?: number;
  className?: string;
  lightGrey?: boolean;
}) {
  return (
    <>
      <Image
        className={`dark:hidden ${props.className}`}
        src={"/portal-05.svg"}
        height={props.height ? props.height : 108}
        width={props.width ? props.width : 161}
        alt="Flame Logo"
        priority
      />
      <Image
        className={`hidden dark:flex ${props.className}`}
        src={"/portal-06.svg"}
        height={props.height ? props.height : 108}
        width={props.width ? props.width : 161}
        alt="Flame Logo"
        priority
      />
    </>
  );
}
