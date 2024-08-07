import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/apple-app-site-association","favicon.png","logo.png","manifest.json","robots.txt","sitemap.xml","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Brun86dZ.js","app":"_app/immutable/entry/app.BsnsJwmq.js","imports":["_app/immutable/entry/start.Brun86dZ.js","_app/immutable/chunks/entry.C_eN_CUs.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.Cynp7HaE.js","_app/immutable/entry/app.BsnsJwmq.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DqnwxzbK.js","_app/immutable/chunks/index.DSZo6Pln.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js')),
			__memo(() => import('../server/nodes/14.js')),
			__memo(() => import('../server/nodes/15.js')),
			__memo(() => import('../server/nodes/16.js')),
			__memo(() => import('../server/nodes/17.js')),
			__memo(() => import('../server/nodes/18.js')),
			__memo(() => import('../server/nodes/19.js')),
			__memo(() => import('../server/nodes/20.js')),
			__memo(() => import('../server/nodes/21.js')),
			__memo(() => import('../server/nodes/22.js')),
			__memo(() => import('../server/nodes/23.js')),
			__memo(() => import('../server/nodes/24.js')),
			__memo(() => import('../server/nodes/25.js')),
			__memo(() => import('../server/nodes/26.js')),
			__memo(() => import('../server/nodes/27.js')),
			__memo(() => import('../server/nodes/28.js')),
			__memo(() => import('../server/nodes/29.js')),
			__memo(() => import('../server/nodes/30.js')),
			__memo(() => import('../server/nodes/31.js')),
			__memo(() => import('../server/nodes/32.js')),
			__memo(() => import('../server/nodes/33.js')),
			__memo(() => import('../server/nodes/34.js')),
			__memo(() => import('../server/nodes/35.js')),
			__memo(() => import('../server/nodes/36.js')),
			__memo(() => import('../server/nodes/37.js')),
			__memo(() => import('../server/nodes/38.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/point/withdrawal_approval",
				pattern: /^\/admin\/point\/withdrawal_approval\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/research/approval",
				pattern: /^\/admin\/research\/approval\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/research/set_screening",
				pattern: /^\/admin\/research\/set_screening\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/alarm",
				pattern: /^\/alarm\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/auth/auth-code-error",
				pattern: /^\/auth\/auth-code-error\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/auth/callback/mobile",
				pattern: /^\/auth\/callback\/mobile\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/auth/callback/mobile/_server.js'))
			},
			{
				id: "/auth/callback/web",
				pattern: /^\/auth\/callback\/web\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/auth/callback/web/_server.js'))
			},
			{
				id: "/guide",
				pattern: /^\/guide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/point",
				pattern: /^\/point\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/point/withdrawal_money",
				pattern: /^\/point\/withdrawal_money\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/rating",
				pattern: /^\/rating\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/regi_research",
				pattern: /^\/regi_research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/regi_research/completed_paying",
				pattern: /^\/regi_research\/completed_paying\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/research_info/[research_id]",
				pattern: /^\/research_info\/([^/]+?)\/?$/,
				params: [{"name":"research_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/see_more",
				pattern: /^\/see_more\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/see_more/account_info",
				pattern: /^\/see_more\/account_info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/see_more/comissioned_research",
				pattern: /^\/see_more\/comissioned_research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/see_more/comissioned_research/order_detail/[research_id]",
				pattern: /^\/see_more\/comissioned_research\/order_detail\/([^/]+?)\/?$/,
				params: [{"name":"research_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/see_more/comissioned_research/rating_user/[research_id]",
				pattern: /^\/see_more\/comissioned_research\/rating_user\/([^/]+?)\/?$/,
				params: [{"name":"research_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/see_more/comissioned_research/rating_user/[research_id]/edit_review/[rating_user_id]",
				pattern: /^\/see_more\/comissioned_research\/rating_user\/([^/]+?)\/edit_review\/([^/]+?)\/?$/,
				params: [{"name":"research_id","optional":false,"rest":false,"chained":false},{"name":"rating_user_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/see_more/comissioned_research/rating_user/[research_id]/regi_review",
				pattern: /^\/see_more\/comissioned_research\/rating_user\/([^/]+?)\/regi_review\/?$/,
				params: [{"name":"research_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/see_more/company_introduction",
				pattern: /^\/see_more\/company_introduction\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/see_more/modify_membership",
				pattern: /^\/see_more\/modify_membership\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/see_more/modify_membership/modify_profile",
				pattern: /^\/see_more\/modify_membership\/modify_profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/see_more/modify_membership/withdrawal_member",
				pattern: /^\/see_more\/modify_membership\/withdrawal_member\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/see_more/notice",
				pattern: /^\/see_more\/notice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/see_more/open_source_license",
				pattern: /^\/see_more\/open_source_license\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/see_more/participated_research",
				pattern: /^\/see_more\/participated_research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/see_more/privacy_policy",
				pattern: /^\/see_more\/privacy_policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/see_more/terms_of_use",
				pattern: /^\/see_more\/terms_of_use\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/setting",
				pattern: /^\/setting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/setting/Set_default",
				pattern: /^\/setting\/Set_default\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/setting/Set_phone",
				pattern: /^\/setting\/Set_phone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
