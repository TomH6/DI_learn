import React, { useState } from "react"

export const Checkbox = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        id="checkbox"
        onChange={() => setChecked(!checked)}
      />
      <span>Check me</span>
      <div>{checked ? "Nut Free" : "No Restrictions"}</div>
    </>
  )
}