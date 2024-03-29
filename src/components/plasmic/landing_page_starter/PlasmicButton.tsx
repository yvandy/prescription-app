// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bwcSSYqcBXtyPeXvFEu2Rh
// Component: j1CvLaKdoY_PwW
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: bwcSSYqcBXtyPeXvFEu2Rh/projectcss
import * as sty from "./PlasmicButton.module.css"; // plasmic-import: j1CvLaKdoY_PwW/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 3bOHmE97YcNirE/icon

export type PlasmicButton__VariantMembers = {
  startIcon: "startIcon";
  endIcon: "endIcon";
  noLabel: "noLabel";
  ouline: "ouline";
  linkLabel: "linkLabel";
  navLink: "navLink";
  darkGray: "darkGray";
  dark: "dark";
  bgDifference: "bgDifference";
  colors: "green" | "indigo" | "blue" | "red" | "white";
  round: "round";
  large: "large";
  flat: "flat";
  noGap: "noGap";
  extraSmallShadow: "extraSmallShadow";
};

export type PlasmicButton__VariantsArgs = {
  startIcon?: SingleBooleanChoiceArg<"startIcon">;
  endIcon?: SingleBooleanChoiceArg<"endIcon">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  ouline?: SingleBooleanChoiceArg<"ouline">;
  linkLabel?: SingleBooleanChoiceArg<"linkLabel">;
  navLink?: SingleBooleanChoiceArg<"navLink">;
  darkGray?: SingleBooleanChoiceArg<"darkGray">;
  dark?: SingleBooleanChoiceArg<"dark">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  colors?: SingleChoiceArg<"green" | "indigo" | "blue" | "red" | "white">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  noGap?: SingleBooleanChoiceArg<"noGap">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "startIcon",
  "endIcon",
  "noLabel",
  "ouline",
  "linkLabel",
  "navLink",
  "darkGray",
  "dark",
  "bgDifference",
  "colors",
  "round",
  "large",
  "flat",
  "noGap",
  "extraSmallShadow"
);

export type PlasmicButton__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
  link?: string | PageHref;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "children2",
  "link"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultButtonProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
  link?: string | PageHref;
  startIcon?: SingleBooleanChoiceArg<"startIcon">;
  endIcon?: SingleBooleanChoiceArg<"endIcon">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  ouline?: SingleBooleanChoiceArg<"ouline">;
  linkLabel?: SingleBooleanChoiceArg<"linkLabel">;
  navLink?: SingleBooleanChoiceArg<"navLink">;
  darkGray?: SingleBooleanChoiceArg<"darkGray">;
  dark?: SingleBooleanChoiceArg<"dark">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  colors?: SingleChoiceArg<"green" | "indigo" | "blue" | "red" | "white">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  noGap?: SingleBooleanChoiceArg<"noGap">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  className?: string;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  dataFetches?: PlasmicButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__bgDifference]: hasVariant(
          variants,
          "bgDifference",
          "bgDifference"
        ),
        [sty.root__colors_blue]: hasVariant(variants, "colors", "blue"),
        [sty.root__colors_green]: hasVariant(variants, "colors", "green"),
        [sty.root__colors_indigo]: hasVariant(variants, "colors", "indigo"),
        [sty.root__colors_red]: hasVariant(variants, "colors", "red"),
        [sty.root__colors_white]: hasVariant(variants, "colors", "white"),
        [sty.root__darkGray]: hasVariant(variants, "darkGray", "darkGray"),
        [sty.root__endIcon]: hasVariant(variants, "endIcon", "endIcon"),
        [sty.root__extraSmallShadow]: hasVariant(
          variants,
          "extraSmallShadow",
          "extraSmallShadow"
        ),
        [sty.root__flat]: hasVariant(variants, "flat", "flat"),
        [sty.root__large]: hasVariant(variants, "large", "large"),
        [sty.root__linkLabel]: hasVariant(variants, "linkLabel", "linkLabel"),
        [sty.root__navLink]: hasVariant(variants, "navLink", "navLink"),
        [sty.root__noGap]: hasVariant(variants, "noGap", "noGap"),
        [sty.root__noLabel]: hasVariant(variants, "noLabel", "noLabel"),
        [sty.root__ouline]: hasVariant(variants, "ouline", "ouline"),
        [sty.root__round]: hasVariant(variants, "round", "round"),
        [sty.root__startIcon]: hasVariant(variants, "startIcon", "startIcon")
      })}
      href={args.link}
    >
      {(
        hasVariant(variants, "noLabel", "noLabel")
          ? true
          : hasVariant(variants, "startIcon", "startIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(defaultcss.all, sty.svg__oekJz)}
                role={"img"}
              />
            ),

            value: args.children
          })
        : null}
      {(hasVariant(variants, "noLabel", "noLabel") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.slot,
            className: classNames(sty.slotSlot, {
              [sty.slotSlot__bgDifference]: hasVariant(
                variants,
                "bgDifference",
                "bgDifference"
              ),
              [sty.slotSlot__colors_blue]: hasVariant(
                variants,
                "colors",
                "blue"
              ),
              [sty.slotSlot__colors_green]: hasVariant(
                variants,
                "colors",
                "green"
              ),
              [sty.slotSlot__colors_indigo]: hasVariant(
                variants,
                "colors",
                "indigo"
              ),
              [sty.slotSlot__colors_red]: hasVariant(variants, "colors", "red"),
              [sty.slotSlot__darkGray]: hasVariant(
                variants,
                "darkGray",
                "darkGray"
              ),
              [sty.slotSlot__dark]: hasVariant(variants, "dark", "dark"),
              [sty.slotSlot__endIcon]: hasVariant(
                variants,
                "endIcon",
                "endIcon"
              ),
              [sty.slotSlot__large]: hasVariant(variants, "large", "large"),
              [sty.slotSlot__linkLabel]: hasVariant(
                variants,
                "linkLabel",
                "linkLabel"
              ),
              [sty.slotSlot__navLink]: hasVariant(
                variants,
                "navLink",
                "navLink"
              ),
              [sty.slotSlot__noLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              ),
              [sty.slotSlot__startIcon]: hasVariant(
                variants,
                "startIcon",
                "startIcon"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "noLabel", "noLabel")
          ? false
          : hasVariant(variants, "endIcon", "endIcon")
          ? true
          : hasVariant(variants, "startIcon", "startIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(defaultcss.all, sty.svg__laEwc)}
                role={"img"}
              />
            ),

            value: args.children2
          })
        : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButton__Fetches;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
