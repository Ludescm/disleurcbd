(()=>{var e={4110:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
var n=window.$;t.default=function(e,t){n.post(e).then((function(){return window.location.assign(t)}))}},61353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(99663)),o=u(n(22600));function u(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=window.$,a=function(){function e(t){(0,r.default)(this,e),this.selector=".ps-sortable-column",this.columns=i(t).find(this.selector)}return(0,o.default)(e,[{key:"attach",value:function(){var e=this;this.columns.on("click",(function(t){var n=i(t.delegateTarget);e.sortByColumn(n,e.getToggledSortDirection(n))}))}},{key:"sortBy",value:function(e,t){var n=this.columns.is('[data-sort-col-name="'+e+'"]');if(!n)throw new Error('Cannot sort by "'+e+'": invalid column');this.sortByColumn(n,t)}},{key:"sortByColumn",value:function(e,t){window.location=this.getUrl(e.data("sortColName"),"desc"===t?"desc":"asc",e.data("sortPrefix"))}},{key:"getToggledSortDirection",value:function(e){return"asc"===e.data("sortDirection")?"desc":"asc"}},{key:"getUrl",value:function(e,t,n){var r=new URL(window.location.href),o=r.searchParams;return n?(o.set(n+"[orderBy]",e),o.set(n+"[sortOrder]",t)):(o.set("orderBy",e),o.set("sortOrder",t)),r.toString()}}]),e}();t.default=a},2573:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(99663)),o=u(n(22600));function u(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=window.$,a=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getHeaderContainer().on("click",".js-common_show_query-grid-action",(function(){return t.onShowSqlQueryClick(e)})),e.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",(function(){return t.onExportSqlManagerClick(e)}))}},{key:"onShowSqlQueryClick",value:function(e){var t=i("#"+e.getId()+"_common_show_query_modal_form");this.fillExportForm(t,e);var n=i("#"+e.getId()+"_grid_common_show_query_modal");n.modal("show"),n.on("click",".btn-sql-submit",(function(){return t.submit()}))}},{key:"onExportSqlManagerClick",value:function(e){var t=i("#"+e.getId()+"_common_show_query_modal_form");this.fillExportForm(t,e),t.submit()}},{key:"fillExportForm",value:function(e,t){var n=t.getContainer().find(".js-grid-table").data("query");e.find('textarea[name="sql"]').val(n),e.find('input[name="name"]').val(this.getNameFromBreadcrumb())}},{key:"getNameFromBreadcrumb",value:function(){var e=i(".header-toolbar").find(".breadcrumb-item"),t="";return e.each((function(e,n){var r=i(n),o=r.find("a").length>0?r.find("a").text():r.text();t.length>0&&(t=t.concat(" > ")),t=t.concat(o)})),t}}]),e}();t.default=a},96803:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600)),u=i(n(4110));function i(e){return e&&e.__esModule?e:{default:e}}var a=window.$,c=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){e.getContainer().on("click",".js-reset-search",(function(e){(0,u.default)(a(e.currentTarget).data("url"),a(e.currentTarget).data("redirect"))}))}}]),e}();
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */t.default=c},91137:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(99663)),o=u(n(22600));function u(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=e.getContainer().find(".column-filters");t.find(".grid-search-button").prop("disabled",!0),t.find("input:not(.js-bulk-action-select-all), select").on("input dp.change",(function(){t.find(".grid-search-button").prop("disabled",!1),t.find(".js-grid-reset-button").prop("hidden",!1)}))}}]),e}();t.default=i},37758:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(99663)),o=u(n(22600));function u(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){e.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",(function(){window.location.reload()}))}}]),e}();t.default=i},58630:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600)),u=i(n(61353));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=e.getContainer().find("table.table");new u.default(t).attach()}}]),e}();
/**
      * Copyright since 2007 PrestaShop SA and Contributors
      * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
      *
      * NOTICE OF LICENSE
      *
      * This source file is subject to the Open Software License (OSL 3.0)
      * that is bundled with this package in the file LICENSE.md.
      * It is also available through the world-wide-web at this URL:
      * https://opensource.org/licenses/OSL-3.0
      * If you did not receive a copy of the license and are unable to
      * obtain it through the world-wide-web, please send an email
      * to license@prestashop.com so we can send you a copy immediately.
      *
      * DISCLAIMER
      *
      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
      * versions in the future. If you wish to customize PrestaShop for your
      * needs please refer to https://devdocs.prestashop.com/ for more information.
      *
      * @author    PrestaShop SA and Contributors <contact@prestashop.com>
      * @copyright Since 2007 PrestaShop SA and Contributors
      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
      */t.default=a},36188:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(99663)),o=u(n(22600));function u(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=window.$,a=function(){function e(){var t=this;return(0,r.default)(this,e),{extend:function(e){return t.extend(e)}}}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getHeaderContainer().on("click",".js-grid-action-submit-btn",(function(n){t.handleSubmit(n,e)}))}},{key:"handleSubmit",value:function(e,t){var n=i(e.currentTarget),r=n.data("confirm-message");if(!(void 0!==r&&r.length>0)||window.confirm(r)){var o=i("#"+t.getId()+"_filter_form");o.attr("action",n.data("url")),o.attr("method",n.data("method")),o.find('input[name="'+t.getId()+'[_token]"]').val(n.data("csrf")),o.submit()}}}]),e}();t.default=a},53277:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(99663)),o=u(n(22600));function u(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var i=window.$,a=function(){function e(t){(0,r.default)(this,e),this.id=t,this.$container=i("#"+this.id+"_grid")}return(0,o.default)(e,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(e){e.extend(this)}}]),e}();t.default=a},32242:(e,t,n)=>{e.exports={default:n(33391),__esModule:!0}},99663:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},22600:(e,t,n)=>{"use strict";t.__esModule=!0;var r,o=n(32242),u=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},33391:(e,t,n)=>{n(31477);var r=n(34579).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},85663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},12159:(e,t,n)=>{var r=n(36727);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},34579:e=>{var t=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)},19216:(e,t,n)=>{var r=n(85663);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},89666:(e,t,n)=>{e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(e,t,n)=>{var r=n(36727),o=n(33938).document,u=r(o)&&r(o.createElement);e.exports=function(e){return u?o.createElement(e):{}}},83856:(e,t,n)=>{var r=n(33938),o=n(34579),u=n(19216),i=n(41818),a=n(27069),c=function(e,t,n){var f,l,d,s=e&c.F,v=e&c.G,p=e&c.S,_=e&c.P,h=e&c.B,y=e&c.W,m=v?o:o[t]||(o[t]={}),g=m.prototype,w=v?r:p?r[t]:(r[t]||{}).prototype;for(f in v&&(n=t),n)(l=!s&&w&&void 0!==w[f])&&a(m,f)||(d=l?w[f]:n[f],m[f]=v&&"function"!=typeof w[f]?n[f]:h&&l?u(d,r):y&&w[f]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):_&&"function"==typeof d?u(Function.call,d):d,_&&((m.virtual||(m.virtual={}))[f]=d,e&c.R&&g&&!g[f]&&i(g,f,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},33938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},27069:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},41818:(e,t,n)=>{var r=n(4743),o=n(83101);e.exports=n(89666)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},33758:(e,t,n)=>{e.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},36727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},4743:(e,t,n)=>{var r=n(12159),o=n(33758),u=n(33206),i=Object.defineProperty;t.f=n(89666)?Object.defineProperty:function(e,t,n){if(r(e),t=u(t,!0),r(n),o)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},83101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},33206:(e,t,n)=>{var r=n(36727);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},31477:(e,t,n)=>{var r=n(83856);r(r.S+r.F*!n(89666),"Object",{defineProperty:n(4743).f})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}(()=>{"use strict";var e=c(n(53277)),t=c(n(37758)),r=c(n(2573)),o=c(n(96803)),u=c(n(58630)),i=c(n(36188)),a=c(n(91137));function c(e){return e&&e.__esModule?e:{default:e}}
/**
                    * Copyright since 2007 PrestaShop SA and Contributors
                    * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
                    *
                    * NOTICE OF LICENSE
                    *
                    * This source file is subject to the Open Software License (OSL 3.0)
                    * that is bundled with this package in the file LICENSE.md.
                    * It is also available through the world-wide-web at this URL:
                    * https://opensource.org/licenses/OSL-3.0
                    * If you did not receive a copy of the license and are unable to
                    * obtain it through the world-wide-web, please send an email
                    * to license@prestashop.com so we can send you a copy immediately.
                    *
                    * DISCLAIMER
                    *
                    * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                    * versions in the future. If you wish to customize PrestaShop for your
                    * needs please refer to https://devdocs.prestashop.com/ for more information.
                    *
                    * @author    PrestaShop SA and Contributors <contact@prestashop.com>
                    * @copyright Since 2007 PrestaShop SA and Contributors
                    * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                    */
(0,window.$)((function(){var n=new e.default("logs");n.addExtension(new t.default),n.addExtension(new r.default),n.addExtension(new o.default),n.addExtension(new u.default),n.addExtension(new i.default),n.addExtension(new a.default)}))})(),window.logs={}})();