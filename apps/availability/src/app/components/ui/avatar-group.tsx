import {
  cloneElement,
  Children,
  forwardRef,
  useMemo,
  ComponentRef,
} from "react";
import type { HTMLAttributes, ReactElement } from "react";
import {cn} from "../../lib/utils";

type TAvatarGroupRef = ComponentRef<"div">;
type TAvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
  max?: number;
  spacing?: number;
};

const AvatarGroup = forwardRef<TAvatarGroupRef, TAvatarGroupProps>(
    ({ className, children, max = 1, spacing = 10, ...props }, ref) => {
      const avatarItems =
          Children.toArray(children) as ReactElement<{
            className?: string;
            style?: React.CSSProperties;
          }>[];

      const renderContent = useMemo(() => {
        return (
            <>
              {avatarItems.slice(0, max).map((child, index) => {
                return cloneElement(child, {
                  className: cn(child.props.className, "border-2 border-background"),
                  style: {
                    marginLeft: index === 0 ? 0 : -spacing,
                    ...child.props.style,
                  },
                });
              })}

              {avatarItems.length > max && (
                  <div
                      className={cn(
                          "relative flex items-center justify-center rounded-full border-2 border-background bg-muted",
                          avatarItems[0].props.className
                      )}
                      style={{ marginLeft: -spacing }}
                  >
                    <p>+{avatarItems.length - max}</p>
                  </div>
              )}
            </>
        );
      }, [avatarItems, max, spacing]);

      return (
          <div ref={ref} className={cn("relative flex", className)} {...props}>
            {renderContent}
          </div>
      );
    }
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
