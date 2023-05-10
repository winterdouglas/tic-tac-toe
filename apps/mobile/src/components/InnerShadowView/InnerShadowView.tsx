import { ComponentProps, ComponentType } from "react";
import { View, ViewProps } from "react-native";

export type InnerShadowViewProps<
  P extends ViewProps,
  CP extends ViewProps
> = P & {
  contentContainerProps?: ComponentProps<ComponentType<CP>>;

  ContentContainerComponent: ComponentType<CP>;

  ViewComponent: ComponentType<P>;
};

export const InnerShadowView = <P extends ViewProps, CP extends ViewProps>({
  ViewComponent,
  ContentContainerComponent,
  contentContainerProps,
  children,
  ...props
}: InnerShadowViewProps<P, CP>) => {
  const Component = ViewComponent || View;
  const ContentContainer = ContentContainerComponent || View;

  return (
    <Component {...(props as unknown as P)}>
      <ContentContainer {...((contentContainerProps || {}) as CP)}>
        {children}
      </ContentContainer>
    </Component>
  );
};
