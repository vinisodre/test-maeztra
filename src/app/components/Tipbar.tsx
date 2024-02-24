import type { TipbarProps }  from "../types/types";
export default function Tipbar({text, className}: TipbarProps) {
  return (
    <div className={className}>{text}</div>
  )
}
