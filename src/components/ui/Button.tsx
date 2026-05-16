import React from "react"
import { cn } from "../../lib/utils"
import { HTMLMotionProps, motion } from "framer-motion"

type BaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
}

export type ButtonProps = BaseProps & 
  (Omit<HTMLMotionProps<"button">, keyof BaseProps> | Omit<HTMLMotionProps<"a">, keyof BaseProps>)

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-black uppercase tracking-wider transition-all duration-300 focus:outline-none",
      // Augusta style: Sharp corners, thick borders, dynamic skew
      "border-2 border-transparent skew-x-[-10deg]",
      {
        "bg-primary text-white hover:bg-primary text-glow shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.4)]": variant === "primary",
        "bg-white text-black hover:bg-gray-200 shadow-[4px_4px_0px_rgba(223,0,255,0.5)]": variant === "secondary",
        "border-white/50 hover:bg-white/10 text-white backdrop-blur-sm": variant === "outline",
        "text-white hover:bg-white/10 skew-x-0": variant === "ghost",
        "h-10 px-6 text-xs": size === "sm",
        "h-12 px-8 text-sm": size === "md",
        "h-16 px-10 text-lg": size === "lg",
      },
      className
    )

    const innerContent = (children: React.ReactNode) => (
      <span className="inline-block skew-x-[10deg]">{children}</span>
    )

    if (href) {
      return (
        <motion.a
          href={href}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(props as HTMLMotionProps<"a">)}
        >
          {innerContent(props.children as React.ReactNode)}
        </motion.a>
      )
    }

    return (
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as HTMLMotionProps<"button">)}
      >
        {innerContent(props.children as React.ReactNode)}
      </motion.button>
    )
  }
)
Button.displayName = "Button"
