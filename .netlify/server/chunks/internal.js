import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
function set_read_implementation(fn) {
}
function set_manifest(_) {
}
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<!-- daisy ui theme light -->\n<html lang="ko" data-theme="light">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta\n			name="viewport"\n			content="viewport-fit=cover, height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"\n		/>\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html>\n	<head>\n		<meta charset="UTF-8" />\n		<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n		<style>\n			/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n			html,\n			body,\n			div,\n			span,\n			applet,\n			object,\n			iframe,\n			h1,\n			h2,\n			h3,\n			h4,\n			h5,\n			h6,\n			p,\n			blockquote,\n			pre,\n			a,\n			abbr,\n			acronym,\n			address,\n			big,\n			cite,\n			code,\n			del,\n			dfn,\n			em,\n			img,\n			ins,\n			kbd,\n			q,\n			s,\n			samp,\n			small,\n			strike,\n			strong,\n			sub,\n			sup,\n			tt,\n			var,\n			b,\n			u,\n			i,\n			center,\n			dl,\n			dt,\n			dd,\n			ol,\n			ul,\n			li,\n			fieldset,\n			form,\n			label,\n			legend,\n			table,\n			caption,\n			tbody,\n			tfoot,\n			thead,\n			tr,\n			th,\n			td,\n			article,\n			aside,\n			canvas,\n			details,\n			embed,\n			figure,\n			figcaption,\n			footer,\n			header,\n			hgroup,\n			menu,\n			nav,\n			output,\n			ruby,\n			section,\n			summary,\n			time,\n			mark,\n			audio,\n			video {\n				margin: 0;\n				padding: 0;\n				border: 0;\n				font-size: 100%;\n				font: inherit;\n				vertical-align: baseline;\n			}\n			/* HTML5 display-role reset for older browsers */\n			article,\n			aside,\n			details,\n			figcaption,\n			figure,\n			footer,\n			header,\n			hgroup,\n			menu,\n			nav,\n			section {\n				display: block;\n			}\n			body {\n				line-height: 1;\n			}\n			ol,\n			ul {\n				list-style: none;\n			}\n			blockquote,\n			q {\n				quotes: none;\n			}\n			blockquote:before,\n			blockquote:after,\n			q:before,\n			q:after {\n				content: "";\n				content: none;\n			}\n			table {\n				border-collapse: collapse;\n				border-spacing: 0;\n			}\n		</style>\n\n		<style>\n			main {\n				height: 100vh;\n				display: flex;\n				flex-direction: column;\n				justify-content: center;\n				align-items: center;\n			}\n\n			.circle {\n				height: 82px;\n				width: 82px;\n				background-color: red;\n				border-radius: 100%;\n				display: flex;\n				align-items: center;\n				justify-content: center;\n			}\n\n			h1 {\n				margin-top: 27px;\n				color: #237bf8;\n				font-size: 30px;\n				font-weight: 900;\n				font-size: 30px;\n			}\n			h2 {\n				margin-top: 16px;\n				margin-bottom: 0;\n				font-weight: 600;\n				font-size: 16px;\n			}\n		</style>\n	</head>\n	<body>\n		<main>\n			<span class="circle">\n				<svg\n					width="10"\n					height="42"\n					viewBox="0 0 10 42"\n					fill="none"\n					xmlns="http://www.w3.org/2000/svg"\n				>\n					<path\n						fill-rule="evenodd"\n						clip-rule="evenodd"\n						d="M5.00039 0.5C7.26476 0.5 9.10039 2.33563 9.10039 4.6V25.1C9.10039 27.3644 7.26476 29.2 5.00039 29.2C2.73602 29.2 0.900391 27.3644 0.900391 25.1V4.6C0.900391 2.33563 2.73602 0.5 5.00039 0.5Z"\n						fill="white"\n					/>\n					<path\n						d="M5.00039 41.4998C7.26476 41.4998 9.10039 39.6642 9.10039 37.3998C9.10039 35.1354 7.26476 33.2998 5.00039 33.2998C2.73602 33.2998 0.900391 35.1354 0.900391 37.3998C0.900391 39.6642 2.73602 41.4998 5.00039 41.4998Z"\n						fill="white"\n					/>\n				</svg>\n			</span>\n\n			<h1>코드오류 ' + status + "</h1>\n\n			<h2>" + message + '</h2>\n			<div\n				class="mt-2 text-center text-sm text-gray-900"\n				style="margin-top: 8px; text-align: center; font-size: 14px; color: gray"\n			>\n				<p>동일한 문제가 지속적으로 발생하는 경우</p>\n				<p>고객센터로 문의해주시기 바랍니다.</p>\n			</div>\n		</main>\n	</body>\n</html>\n'
  },
  version_hash: "2irbln"
};
async function get_hooks() {
  return {
    ...await import("./hooks.server.js")
  };
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_manifest as k,
  set_prerendering as l,
  set_read_implementation as m,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
