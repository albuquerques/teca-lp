/* @ds-bundle: {"format":4,"namespace":"TECASBCDesignSystem_14f9fa","components":[{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/data-display/Card.jsx":"c5008b2378b6","components/feedback/Badge.jsx":"fead006a91bd","components/feedback/ProgressBar.jsx":"50c5d0fe4000","components/feedback/Tag.jsx":"89a7637feacb","components/feedback/Toast.jsx":"039a9d1c0832","components/feedback/Tooltip.jsx":"54e30fce4bb7","components/forms/Button.jsx":"fba820c3bd33","components/forms/Checkbox.jsx":"9225076ce179","components/forms/IconButton.jsx":"eba6417af4c1","components/forms/Input.jsx":"8ecd3a20cb8b","components/forms/Radio.jsx":"b475f07b8416","components/forms/Select.jsx":"c9769b02bf65","components/forms/Switch.jsx":"d3b3737d0294","components/navigation/Tabs.jsx":"e7419a45d42a","components/overlay/Dialog.jsx":"fee7bdd8690e","ui_kits/teca-sbc-site/App.jsx":"6656d7655470","ui_kits/teca-sbc-site/Curriculum.jsx":"55862a9b3829","ui_kits/teca-sbc-site/EnrollDialog.jsx":"76b950b5563b","ui_kits/teca-sbc-site/Footer.jsx":"5415fb89142a","ui_kits/teca-sbc-site/Header.jsx":"b19e48372727","ui_kits/teca-sbc-site/Hero.jsx":"f9d56cc6aada","ui_kits/teca-sbc-site/Highlights.jsx":"0cbcebae70e0","ui_kits/teca-sbc-site/Stats.jsx":"de3f7745d961"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TECASBCDesignSystem_14f9fa = window.TECASBCDesignSystem_14f9fa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Card.jsx
try { (() => {
function Card(props) {
  const {
    children,
    variant = "default",
    padding = "var(--space-5)",
    style,
    ...rest
  } = props;
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-primary)"
    },
    dark: {
      background: "var(--surface-dark)",
      border: "1px solid var(--border-dark)",
      color: "var(--text-inverse)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      border: "1px solid transparent",
      color: "var(--text-primary)"
    }
  };
  return React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      fontFamily: "var(--font-body)",
      ...variants[variant],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge(props) {
  const {
    children,
    tone = "neutral",
    style,
    ...rest
  } = props;
  const tones = {
    neutral: {
      background: "var(--surface-sunken)",
      color: "var(--text-secondary)"
    },
    primary: {
      background: "var(--teal-100)",
      color: "var(--teal-800)"
    },
    success: {
      background: "#e4f5ec",
      color: "#1a6b46"
    },
    warning: {
      background: "#fbeada",
      color: "#8a5417"
    },
    danger: {
      background: "var(--crimson-100)",
      color: "var(--crimson-700)"
    },
    "on-dark": {
      background: "rgba(255,255,255,0.12)",
      color: "var(--text-inverse)"
    }
  };
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 var(--space-2)",
      borderRadius: "var(--radius-sm)",
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-semibold)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label-caps)",
      fontFamily: "var(--font-body)",
      ...tones[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar(props) {
  const {
    value = 0,
    max = 100,
    label,
    tone = "primary",
    style
  } = props;
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const tones = {
    primary: "var(--accent-primary)",
    emergency: "var(--accent-emergency)"
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)"
    }
  }, React.createElement("span", null, label), React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums"
    }
  }, `${Math.round(pct)}%`)), React.createElement("div", {
    style: {
      height: 8,
      borderRadius: "var(--radius-full)",
      background: "var(--surface-sunken)",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      height: "100%",
      width: `${pct}%`,
      background: tones[tone],
      borderRadius: "var(--radius-full)",
      transition: "width var(--duration-slow) var(--ease-standard)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag(props) {
  const {
    children,
    onRemove,
    style,
    ...rest
  } = props;
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 28,
      padding: "0 var(--space-3)",
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      ...style
    },
    ...rest
  }, children, onRemove && React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "remover",
    style: {
      display: "inline-flex",
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 0
    }
  }, React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5
  }, React.createElement("line", {
    x1: 18,
    y1: 6,
    x2: 6,
    y2: 18
  }), React.createElement("line", {
    x1: 6,
    y1: 6,
    x2: 18,
    y2: 18
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast(props) {
  const {
    tone = "info",
    title,
    description,
    onClose,
    style
  } = props;
  const tones = {
    info: {
      accent: "var(--teal-500)",
      icon: "ℹ"
    },
    success: {
      accent: "#1f8f5a",
      icon: "✓"
    },
    warning: {
      accent: "#c8802c",
      icon: "!"
    },
    danger: {
      accent: "var(--accent-emergency)",
      icon: "!"
    }
  };
  const t = tones[tone];
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      width: 340,
      padding: "var(--space-4)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      borderLeft: `3px solid ${t.accent}`,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, React.createElement("span", {
    style: {
      color: t.accent,
      fontWeight: "var(--weight-bold)"
    }
  }, t.icon), React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-primary)",
      marginBottom: 2
    }
  }, title), description && React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)"
    }
  }, description)), onClose && React.createElement("button", {
    onClick: onClose,
    "aria-label": "fechar",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 0
    }
  }, React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5
  }, React.createElement("line", {
    x1: 18,
    y1: 6,
    x2: 6,
    y2: 18
  }), React.createElement("line", {
    x1: 6,
    y1: 6,
    x2: 18,
    y2: 18
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip(props) {
  const {
    children,
    label,
    side = "top"
  } = props;
  const [open, setOpen] = React.useState(false);
  const positions = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, children, open && React.createElement("span", {
    style: {
      position: "absolute",
      ...positions[side],
      zIndex: 20,
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      fontSize: "var(--text-caption)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      fontFamily: "var(--font-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button(props) {
  const {
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    icon = null,
    iconPosition = "left",
    type = "button",
    onClick,
    style,
    ...rest
  } = props;
  const sizes = {
    sm: {
      padding: "0 var(--space-4)",
      height: 36,
      fontSize: "var(--text-body-sm)",
      gap: 6
    },
    md: {
      padding: "0 var(--space-5)",
      height: 44,
      fontSize: "var(--text-body-md)",
      gap: 8
    },
    lg: {
      padding: "0 var(--space-6)",
      height: 52,
      fontSize: "var(--text-body-lg)",
      gap: 8
    }
  };
  const variants = {
    primary: {
      background: "var(--accent-primary)",
      color: "var(--navy-900)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--accent-emergency)",
      color: "var(--text-inverse)",
      border: "1px solid transparent"
    },
    "on-dark": {
      background: "transparent",
      color: "var(--text-inverse)",
      border: "1px solid rgba(255,255,255,0.35)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-semibold)",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  return React.createElement("button", {
    type,
    disabled,
    onClick,
    style: base,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    ...rest
  }, icon && iconPosition === "left" ? React.createElement("span", {
    style: {
      display: "inline-flex",
      marginRight: sizes[size].gap
    }
  }, icon) : null, children, icon && iconPosition === "right" ? React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: sizes[size].gap
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox(props) {
  const {
    label,
    checked,
    defaultChecked,
    disabled = false,
    onChange,
    id,
    style,
    ...rest
  } = props;
  const boxId = id || React.useId();
  const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
  const checkedVal = checked !== undefined ? checked : isChecked;
  return React.createElement("label", {
    htmlFor: boxId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-primary)",
      ...style
    }
  }, React.createElement("input", {
    type: "checkbox",
    id: boxId,
    checked: checked !== undefined ? checked : undefined,
    defaultChecked,
    disabled,
    onChange: e => {
      setIsChecked(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      display: "none"
    },
    ...rest
  }), React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-sm)",
      border: `1.5px solid ${checkedVal ? "var(--accent-primary)" : "var(--border-strong)"}`,
      background: checkedVal ? "var(--accent-primary)" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
      flexShrink: 0
    }
  }, checkedVal && React.createElement("svg", {
    width: 12,
    height: 10,
    viewBox: "0 0 12 10",
    fill: "none"
  }, React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "var(--navy-900)",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton(props) {
  const {
    icon,
    size = "md",
    variant = "ghost",
    disabled = false,
    "aria-label": ariaLabel,
    onClick,
    style,
    ...rest
  } = props;
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size];
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-strong)"
    },
    filled: {
      background: "var(--surface-sunken)",
      color: "var(--text-primary)",
      border: "1px solid transparent"
    },
    "on-dark": {
      background: "rgba(255,255,255,0.08)",
      color: "var(--text-inverse)",
      border: "1px solid rgba(255,255,255,0.2)"
    }
  };
  return React.createElement("button", {
    type: "button",
    disabled,
    onClick,
    "aria-label": ariaLabel,
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...variants[variant],
      ...style
    },
    ...rest
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input(props) {
  const {
    label,
    helperText,
    error,
    size = "md",
    disabled = false,
    id,
    style,
    ...rest
  } = props;
  const heights = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const inputId = id || React.useId();
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-primary)"
    }
  }, label), React.createElement("input", {
    id: inputId,
    disabled,
    style: {
      height: heights[size],
      padding: "0 var(--space-4)",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${error ? "var(--accent-emergency)" : "var(--border-strong)"}`,
      fontSize: "var(--text-body-md)",
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      outline: "none"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--border-focus)";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(66,183,187,0.25)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? "var(--accent-emergency)" : "var(--border-strong)";
      e.currentTarget.style.boxShadow = "none";
    },
    ...rest
  }), (helperText || error) && React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: error ? "var(--text-emergency)" : "var(--text-muted)"
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio(props) {
  const {
    label,
    name,
    checked,
    defaultChecked,
    disabled = false,
    onChange,
    id,
    style,
    ...rest
  } = props;
  const radioId = id || React.useId();
  const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
  const checkedVal = checked !== undefined ? checked : isChecked;
  return React.createElement("label", {
    htmlFor: radioId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-primary)",
      ...style
    }
  }, React.createElement("input", {
    type: "radio",
    id: radioId,
    name,
    checked: checked !== undefined ? checked : undefined,
    defaultChecked,
    disabled,
    onChange: e => {
      setIsChecked(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      display: "none"
    },
    ...rest
  }), React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `1.5px solid ${checkedVal ? "var(--accent-primary)" : "var(--border-strong)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, checkedVal && React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--accent-primary)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select(props) {
  const {
    label,
    options = [],
    size = "md",
    disabled = false,
    id,
    style,
    ...rest
  } = props;
  const heights = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const selectId = id || React.useId();
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-primary)"
    }
  }, label), React.createElement("select", {
    id: selectId,
    disabled,
    style: {
      height: heights[size],
      padding: "0 var(--space-4)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-strong)",
      fontSize: "var(--text-body-md)",
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      outline: "none"
    },
    ...rest
  }, options.map(opt => React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch(props) {
  const {
    label,
    checked,
    defaultChecked,
    disabled = false,
    onChange,
    id,
    style,
    ...rest
  } = props;
  const switchId = id || React.useId();
  const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
  const checkedVal = checked !== undefined ? checked : isChecked;
  return React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-md)",
      color: "var(--text-primary)",
      ...style
    }
  }, React.createElement("input", {
    type: "checkbox",
    role: "switch",
    id: switchId,
    checked: checked !== undefined ? checked : undefined,
    defaultChecked,
    disabled,
    onChange: e => {
      setIsChecked(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      display: "none"
    },
    ...rest
  }), React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      borderRadius: "var(--radius-full)",
      background: checkedVal ? "var(--accent-primary)" : "var(--neutral-300)",
      position: "relative",
      flexShrink: 0,
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checkedVal ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-fast) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs(props) {
  const {
    items = [],
    defaultValue,
    value,
    onChange,
    style
  } = props;
  const [internal, setInternal] = React.useState(defaultValue || items[0] && items[0].value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, items.map(item => {
    const isActive = item.value === active;
    return React.createElement("button", {
      key: item.value,
      type: "button",
      onClick: () => select(item.value),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "var(--space-3) 0",
        marginBottom: -1,
        fontSize: "var(--text-body-md)",
        fontFamily: "var(--font-body)",
        fontWeight: isActive ? "var(--weight-semibold)" : "var(--weight-regular)",
        color: isActive ? "var(--text-primary)" : "var(--text-muted)",
        borderBottom: isActive ? "2px solid var(--accent-primary)" : "2px solid transparent",
        transition: "color var(--duration-fast) var(--ease-standard)"
      }
    }, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog(props) {
  const {
    open,
    onClose,
    title,
    children,
    footer,
    style
  } = props;
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(19,26,55,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      width: 420,
      maxWidth: "90vw",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-body)",
      ...style
    },
    onClick: e => e.stopPropagation()
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-5) var(--space-5) 0"
    }
  }, React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-heading-md)",
      color: "var(--text-primary)"
    }
  }, title), React.createElement("button", {
    onClick: onClose,
    "aria-label": "fechar",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2
  }, React.createElement("line", {
    x1: 18,
    y1: 6,
    x2: 6,
    y2: 18
  }), React.createElement("line", {
    x1: 6,
    y1: 6,
    x2: 18,
    y2: 18
  })))), React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-5)",
      color: "var(--text-secondary)",
      fontSize: "var(--text-body-md)"
    }
  }, children), footer && React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: "var(--space-4) var(--space-5)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teca-sbc-site/App.jsx
try { (() => {
function App(props) {
  const ds = props.ds;
  const [enrollOpen, setEnrollOpen] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement("div", {
    style: {
      background: "var(--surface-page)"
    }
  }, React.createElement(window.Header, {
    onEnroll: () => setEnrollOpen(true)
  }), React.createElement(window.Hero, {
    onEnroll: () => setEnrollOpen(true)
  }), React.createElement(window.Highlights, null), React.createElement(window.Curriculum, {
    ds
  }), React.createElement(window.Stats, null), React.createElement(window.Footer, null), React.createElement(window.EnrollDialog, {
    open: enrollOpen,
    onClose: () => setEnrollOpen(false),
    ds
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teca-sbc-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teca-sbc-site/Curriculum.jsx
try { (() => {
function Curriculum(props) {
  const {
    Tabs,
    ProgressBar,
    Badge
  } = props.ds;
  const [tab, setTab] = React.useState("teorico");
  const modules = {
    teorico: [{
      title: "Fisiopatologia da parada cardíaca",
      time: "45 min"
    }, {
      title: "Ritmos de PCR e leitura de ECG",
      time: "1h 10min"
    }, {
      title: "Farmacologia de emergência",
      time: "50 min"
    }],
    pratico: [{
      title: "RCP de alta qualidade e DEA",
      time: "1h 30min"
    }, {
      title: "Via aérea avançada",
      time: "1h"
    }, {
      title: "Simulação de cenário crítico",
      time: "2h"
    }],
    avaliacao: [{
      title: "Prova teórica objetiva",
      time: "1h"
    }, {
      title: "Estação prática avaliativa",
      time: "40 min"
    }]
  };
  return React.createElement("section", {
    id: "modulos",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-6) var(--space-20)"
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-sm)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-display-caps)",
      color: "var(--text-primary)",
      margin: "0 0 var(--space-6)"
    }
  }, "Programa do curso"), React.createElement(Tabs, {
    items: [{
      value: "teorico",
      label: "Módulo teórico"
    }, {
      value: "pratico",
      label: "Módulo prático"
    }, {
      value: "avaliacao",
      label: "Avaliação"
    }],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: "var(--space-6)"
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, modules[tab].map((m, i) => React.createElement("div", {
    key: m.title,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-4) var(--space-5)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-muted)",
      width: 24
    }
  }, String(i + 1).padStart(2, "0")), React.createElement("span", {
    style: {
      fontSize: "var(--text-body-md)",
      color: "var(--text-primary)",
      fontWeight: "var(--weight-medium)"
    }
  }, m.title)), React.createElement(Badge, {
    tone: "neutral"
  }, m.time)))));
}
window.Curriculum = Curriculum;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teca-sbc-site/Curriculum.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teca-sbc-site/EnrollDialog.jsx
try { (() => {
function EnrollDialog(props) {
  const {
    open,
    onClose,
    ds
  } = props;
  const {
    Dialog,
    Input,
    Select,
    Button
  } = ds;
  const [submitted, setSubmitted] = React.useState(false);
  React.useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);
  return React.createElement(Dialog, {
    open,
    onClose,
    title: submitted ? "Inscrição recebida" : "Inscreva-se no TECA SBC",
    footer: !submitted && React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancelar"), React.createElement(Button, {
      variant: "primary",
      onClick: () => setSubmitted(true)
    }, "Confirmar inscrição"))
  }, submitted ? React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Você receberá os detalhes da próxima turma por e-mail e WhatsApp.") : React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, React.createElement(Input, {
    label: "Nome completo",
    placeholder: "Seu nome"
  }), React.createElement(Input, {
    label: "E-mail",
    placeholder: "voce@hospital.com.br",
    type: "email"
  }), React.createElement(Select, {
    label: "Especialidade",
    options: [{
      value: "cardio",
      label: "Cardiologia"
    }, {
      value: "emerg",
      label: "Medicina de Emergência"
    }, {
      value: "enf",
      label: "Enfermagem"
    }, {
      value: "outra",
      label: "Outra"
    }]
  })));
}
window.EnrollDialog = EnrollDialog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teca-sbc-site/EnrollDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teca-sbc-site/Footer.jsx
try { (() => {
function Footer() {
  return React.createElement("footer", {
    style: {
      background: "var(--surface-dark-alt)",
      padding: "var(--space-12) var(--space-6) var(--space-8)"
    }
  }, React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "var(--space-8)"
    }
  }, React.createElement("div", null, React.createElement("img", {
    src: "../../assets/logos/teca-sbc-horizontal-negativo.svg",
    alt: "TECA SBC",
    style: {
      height: 26,
      marginBottom: "var(--space-4)"
    }
  }), React.createElement("p", {
    style: {
      color: "var(--text-inverse-muted)",
      fontSize: "var(--text-body-sm)",
      maxWidth: 320,
      margin: 0
    }
  }, "Um treinamento Medsafe em parceria com a Sociedade Brasileira de Cardiologia.")), React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, React.createElement("i", {
    "data-lucide": "message-circle",
    style: {
      width: 16,
      height: 16,
      color: "var(--teal-400)"
    }
  }), React.createElement("span", {
    style: {
      color: "var(--text-inverse)",
      fontSize: "var(--text-body-sm)"
    }
  }, "+55 86 99807-9236"))), React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-8) auto 0",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      color: "var(--text-inverse-muted)",
      fontSize: "var(--text-caption)"
    }
  }, "© 2026 Medsafe Brasil · medsafebrasil.com.br"));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teca-sbc-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teca-sbc-site/Header.jsx
try { (() => {
function Header(props) {
  const {
    onEnroll
  } = props;
  const [open, setOpen] = React.useState(false);
  const navItems = ["Sobre o curso", "Módulos", "Corpo docente", "Certificação"];
  return React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--space-6)"
    }
  }, React.createElement("img", {
    src: "../../assets/logos/teca-sbc-horizontal-positivo.svg",
    alt: "TECA SBC",
    style: {
      height: 30
    }
  }), React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "center"
    },
    className: "nav-desktop"
  }, navItems.map(n => React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, n))), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, React.createElement("button", {
    onClick: onEnroll,
    style: {
      height: 40,
      padding: "0 var(--space-5)",
      borderRadius: "var(--radius-md)",
      background: "var(--accent-primary)",
      color: "var(--navy-900)",
      border: "none",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-body-sm)",
      cursor: "pointer"
    }
  }, "Inscreva-se"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teca-sbc-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teca-sbc-site/Hero.jsx
try { (() => {
function Hero(props) {
  const {
    onEnroll
  } = props;
  return React.createElement("section", {
    className: "bg-grid-dark",
    style: {
      background: "linear-gradient(180deg, var(--surface-dark) 0%, var(--surface-dark-alt) 100%)",
      position: "relative",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6) var(--space-20)",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      borderRadius: "var(--radius-full)",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      marginBottom: "var(--space-6)"
    }
  }, React.createElement("i", {
    "data-lucide": "activity",
    style: {
      width: 14,
      height: 14,
      color: "var(--crimson-400)"
    }
  }), React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--text-inverse-muted)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label-caps)"
    }
  }, "Medsafe × SBC")), React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-display-caps)",
      lineHeight: "var(--leading-display)",
      fontSize: "var(--text-display-lg)",
      color: "var(--text-inverse)",
      margin: "0 0 var(--space-5)"
    }
  }, "Domine a emergência cardiovascular_"), React.createElement("p", {
    style: {
      fontSize: "var(--text-body-lg)",
      color: "var(--text-inverse-muted)",
      maxWidth: 480,
      margin: "0 0 var(--space-8)"
    }
  }, "Treinamento prático e científico para reconhecer, decidir e agir nos primeiros minutos de uma emergência cardiovascular."), React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, React.createElement("button", {
    onClick: onEnroll,
    style: {
      height: 52,
      padding: "0 var(--space-6)",
      borderRadius: "var(--radius-md)",
      background: "var(--accent-primary)",
      color: "var(--navy-900)",
      border: "none",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-body-md)",
      cursor: "pointer"
    }
  }, "Garantir minha vaga"), React.createElement("button", {
    style: {
      height: 52,
      padding: "0 var(--space-6)",
      borderRadius: "var(--radius-md)",
      background: "transparent",
      color: "var(--text-inverse)",
      border: "1px solid rgba(255,255,255,0.35)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-body-md)",
      cursor: "pointer"
    }
  }, "Ver programação"))), React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center"
    }
  }, React.createElement("img", {
    src: "../../assets/imagery/hero-cover-heart.png",
    alt: "Ilustração de coração em rede de partículas — capa do material TECA SBC",
    style: {
      width: "100%",
      maxWidth: 340,
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)"
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teca-sbc-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teca-sbc-site/Highlights.jsx
try { (() => {
function Highlights() {
  const items = [{
    icon: "shield-check",
    title: "Protocolos atualizados",
    desc: "Baseado nas diretrizes mais recentes da Sociedade Brasileira de Cardiologia."
  }, {
    icon: "activity",
    title: "Simulação realista",
    desc: "Cenários cronometrados de parada cardíaca e emergências cardiovasculares."
  }, {
    icon: "users",
    title: "Corpo docente especialista",
    desc: "Cardiologistas e intensivistas com experiência em sala de emergência."
  }, {
    icon: "award",
    title: "Certificação SBC",
    desc: "Certificado reconhecido ao concluir teoria, prática e avaliação final."
  }];
  return React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-20) var(--space-6)"
    }
  }, React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)"
    }
  }, items.map(it => React.createElement("div", {
    key: it.title,
    style: {
      padding: "var(--space-6)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)"
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--teal-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "var(--space-4)"
    }
  }, React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--teal-700)"
    }
  })), React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-heading-sm)",
      margin: "0 0 var(--space-2)",
      color: "var(--text-primary)"
    }
  }, it.title), React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)",
      margin: 0,
      lineHeight: "var(--leading-body)"
    }
  }, it.desc)))));
}
window.Highlights = Highlights;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teca-sbc-site/Highlights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teca-sbc-site/Stats.jsx
try { (() => {
function Stats() {
  const stats = [{
    value: "98%",
    label: "Taxa de aprovação"
  }, {
    value: "02:14",
    label: "Tempo médio de resposta simulado"
  }, {
    value: "1.200+",
    label: "Profissionais certificados"
  }, {
    value: "12h",
    label: "Carga horária total"
  }];
  return React.createElement("section", {
    className: "bg-grid-dark",
    style: {
      background: "var(--surface-dark)"
    }
  }, React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)"
    }
  }, stats.map(s => React.createElement("div", {
    key: s.label,
    style: {
      textAlign: "left"
    }
  }, React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-display-sm)",
      color: "var(--teal-400)",
      marginBottom: 4
    }
  }, s.value), React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--text-inverse-muted)"
    }
  }, s.label)))));
}
window.Stats = Stats;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teca-sbc-site/Stats.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
