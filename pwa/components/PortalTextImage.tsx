import Image from "next/image";

export default function PortalTextImage(props: {
  height?: number;
  width?: number;
  className?: string;
}) {
  return (
    <>
      <Image
        className={`dark:hidden ${props.className}`}
        src={"/portal-01.svg"}
        height={props.height ? props.height : 69}
        width={props.width ? props.width : 397}
        alt="Portal Logo"
        priority
      />

      <Image
        className={`hidden dark:flex ${props.className}`}
        src={"/portal-03.svg"}
        height={props.height ? props.height : 69}
        width={props.width ? props.width : 397}
        alt="Portal Logo"
        priority
      />
    </>
  );
}
