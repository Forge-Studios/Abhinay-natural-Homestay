import Image from "next/image";
import { ReactNode } from "react";
import BaseCard from "./base/BaseCard";
import Button from "./base/Button";

type ImageInfoCardBaseProps = {
  src: string;
  alt: string;
  content: ReactNode;
  textColor?: string; // e.g. "text-white"
  bgColor?: string; // e.g. "bg-gray-800"
};

type ImageInfoCardProps =
  | (ImageInfoCardBaseProps & {
      hasBtn: false;
      btnText?: string;
      btnType?: "link" | "button";
      href?: string;
      onPress?: () => void;
    })
  | (ImageInfoCardBaseProps & {
      hasBtn: true;
      btnText?: string;
      btnType: "link";
      href: string;
      onPress?: never;
    })
  | (ImageInfoCardBaseProps & {
      hasBtn: true;
      btnText?: string;
      btnType: "button";
      onPress: () => void;
      href?: never;
    });

export default function ImageInfoCard(props: ImageInfoCardProps) {
  const { src, alt, content, textColor = "text-white", bgColor } = props;

  return (
    <BaseCard className={`p-4 ${bgColor} flex flex-col items-center gap-2 h-max`}>
      <div className="relative w-full aspect-5/3 rounded-4xl overflow-hidden">
        <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 500px" className="object-cover" />
      </div>

      <div className={`${textColor} p-4`}>{content}</div>

      <div className="w-xs">
        {props.hasBtn && props.btnType === "link" && <Button text={props.btnText ?? "Click Me"} type="link" href={props.href} hasArrow={false} />}

        {props.hasBtn && props.btnType === "button" && (
          <Button text={props.btnText ?? "Click Me"} type="button" onPress={props.onPress} hasArrow={false} />
        )}
      </div>
    </BaseCard>
  );
}
