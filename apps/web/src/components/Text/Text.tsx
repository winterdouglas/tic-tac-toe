import { ComponentType, ReactNode, useMemo, ElementType } from "react";
import styled from "styled-components";

import { FontConfig } from "theme";
import { bodyText, headingText } from "@/styles/mixins";

type TextElement = Pick<
  JSX.IntrinsicElements,
  | "a"
  | "abbr"
  | "address"
  | "article"
  | "b"
  | "blockquote"
  | "button"
  | "dfn"
  | "div"
  | "dialog"
  | "fieldset"
  | "form"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "header"
  | "i"
  | "input"
  | "label"
  | "li"
  | "ol"
  | "p"
  | "pre"
  | "section"
  | "select"
  | "time"
  | "ul"
  | "wbr"
>;

export type TextProps<T extends keyof TextElement> = TextElement[T] & {
  preset?: Preset;
  renderAs?: T;
};

export const Text = <T extends keyof TextElement>({
  preset,
  renderAs,
  children,
  ...props
}: TextProps<T>) => {
  const Component = useMemo(() => presets[preset || "body"], [preset]);

  return (
    <Component as={renderAs} {...props}>
      {children}
    </Component>
  );
};

type Preset = keyof FontConfig;

type PresetProps = {
  as?: ElementType;
  preset?: Preset;
  children?: ReactNode;
};

const customPreset = (preset?: Preset) => {
  if (!preset) return undefined;

  if (preset === "body") return bodyText;
  return headingText(preset);
};

const presets: Record<Preset, ComponentType<PresetProps>> = {
  body: styled.span<PresetProps>`
    ${({ preset }) => customPreset(preset)}
  `,
  hl: styled.h1<PresetProps>`
    ${headingText("hl")}
    ${({ preset }) => customPreset(preset)}
  `,
  hm: styled.h2<PresetProps>`
    ${headingText("hm")}
    ${({ preset }) => customPreset(preset)}
  `,
  hs: styled.h3<PresetProps>`
    ${headingText("hs")}
    ${({ preset }) => customPreset(preset)}
  `,
  hxs: styled.h4<PresetProps>`
    ${headingText("hxs")}
    ${({ preset }) => customPreset(preset)}
  `,
};
