import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { width = 24 } = $$props;
  let { height = 24 } = $$props;
  let { color = "" } = $$props;
  const icons = {
    left_arrow: `<path d="M15 5L8 12L15 19" stroke="#101118" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
    alarm: `<path d="M8.74512 18.6668C8.74512 16.8259 10.202 15.3335 11.9991 15.3335V15.3335C13.7962 15.3335 15.253 16.8259 15.253 18.6668V18.6668C15.253 20.5078 13.7962 22.0002 11.9991 22.0002V22.0002C10.202 22.0002 8.74512 20.5078 8.74512 18.6668V18.6668Z"
						fill="#797E8A"/>
						<path d="M4.76893 9.40743C4.76893 5.31642 8.00638 2 12 2C15.9936 2 19.231 5.31642 19.231 9.40743V10.5288C19.231 12.2126 19.7267 13.8728 20.6385 15.2738C21.5762 16.7146 20.5823 18.6667 18.8919 18.6667H5.10815C3.41773 18.6667 2.42383 16.7146 3.3615 15.2738C4.27324 13.8728 4.76893 12.2126 4.76893 10.5288V9.40743Z"
						fill="#797E8A"/>`
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g${add_attribute("stroke", color, 0)}><!-- HTML_TAG_START -->${icons[name]}<!-- HTML_TAG_END --></g></svg>`;
});
export {
  Page as P
};
