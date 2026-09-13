/* YuanKit v0.5.0 — MIT; Vue is an external dependency. */
(function(global){'use strict';
const modules={"packages/vue/src/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkTestimonials = exports.YkFaq = exports.YkPricing = exports.YkLogoCloud = exports.YkStats = exports.YkFeatureGrid = exports.YkStepper = exports.YkScrollArea = exports.YkCombobox = exports.YkDropdownMenu = exports.YkDrawer = exports.YkPopover = exports.YkTable = exports.YkButtonGroup = exports.YkToggle = exports.YkSpinner = exports.YkStatusPage = exports.YkAnnouncement = exports.YkFooter = exports.YkCta = exports.YkHero = exports.YkNavbar = exports.YkEmptyState = exports.YkSkeleton = exports.YkPagination = exports.YkBreadcrumb = exports.YkAccordion = exports.YkSlider = exports.createYuanKit = exports.tokenKeys = exports.mergeConfig = exports.toCssVariables = exports.defaultConfig = exports.YkProgress = exports.YkSeparator = exports.YkAvatar = exports.YkAlert = exports.YkCard = exports.YkBadge = exports.YkTooltip = exports.YkTabs = exports.YkDialog = exports.YkSelect = exports.YkRadioGroup = exports.YkSwitch = exports.YkCheckbox = exports.YkTextarea = exports.YkInput = exports.YkButton = exports.YkConfigProvider = void 0;
exports.YkAIChatPage = exports.YkAIAssistantDock = exports.YkAIKnowledgePanel = exports.YkAIUsage = exports.YkAIArtifact = exports.YkAISuggestions = exports.YkAIActivity = exports.YkAISources = exports.YkAIToolCall = exports.YkAIPromptInput = exports.YkAIAttachments = exports.YkAIModelSelect = exports.YkAIConversation = exports.YkAIMessage = exports.YkAIStreamingText = exports.YkTagsInput = exports.YkChart = exports.YkSidebar = exports.YkCommand = exports.YkToast = exports.YkCarousel = exports.YkTree = exports.YkFileUpload = exports.YkDatePicker = exports.YkCalendar = exports.YkPageTemplate = exports.YkBentoGrid = exports.YkSteps = exports.YkContact = exports.YkNewsletter = void 0;
var index_js_1 = require("./components/config-provider/index.js");
Object.defineProperty(exports, "YkConfigProvider", { enumerable: true, get: function () { return index_js_1.YkConfigProvider; } });
var index_js_2 = require("./components/button/index.js");
Object.defineProperty(exports, "YkButton", { enumerable: true, get: function () { return index_js_2.YkButton; } });
var index_js_3 = require("./components/input/index.js");
Object.defineProperty(exports, "YkInput", { enumerable: true, get: function () { return index_js_3.YkInput; } });
var index_js_4 = require("./components/textarea/index.js");
Object.defineProperty(exports, "YkTextarea", { enumerable: true, get: function () { return index_js_4.YkTextarea; } });
var index_js_5 = require("./components/checkbox/index.js");
Object.defineProperty(exports, "YkCheckbox", { enumerable: true, get: function () { return index_js_5.YkCheckbox; } });
var index_js_6 = require("./components/switch/index.js");
Object.defineProperty(exports, "YkSwitch", { enumerable: true, get: function () { return index_js_6.YkSwitch; } });
var index_js_7 = require("./components/radio-group/index.js");
Object.defineProperty(exports, "YkRadioGroup", { enumerable: true, get: function () { return index_js_7.YkRadioGroup; } });
var index_js_8 = require("./components/select/index.js");
Object.defineProperty(exports, "YkSelect", { enumerable: true, get: function () { return index_js_8.YkSelect; } });
var index_js_9 = require("./components/dialog/index.js");
Object.defineProperty(exports, "YkDialog", { enumerable: true, get: function () { return index_js_9.YkDialog; } });
var index_js_10 = require("./components/tabs/index.js");
Object.defineProperty(exports, "YkTabs", { enumerable: true, get: function () { return index_js_10.YkTabs; } });
var index_js_11 = require("./components/tooltip/index.js");
Object.defineProperty(exports, "YkTooltip", { enumerable: true, get: function () { return index_js_11.YkTooltip; } });
var index_js_12 = require("./components/badge/index.js");
Object.defineProperty(exports, "YkBadge", { enumerable: true, get: function () { return index_js_12.YkBadge; } });
var index_js_13 = require("./components/card/index.js");
Object.defineProperty(exports, "YkCard", { enumerable: true, get: function () { return index_js_13.YkCard; } });
var index_js_14 = require("./components/alert/index.js");
Object.defineProperty(exports, "YkAlert", { enumerable: true, get: function () { return index_js_14.YkAlert; } });
var index_js_15 = require("./components/avatar/index.js");
Object.defineProperty(exports, "YkAvatar", { enumerable: true, get: function () { return index_js_15.YkAvatar; } });
var index_js_16 = require("./components/separator/index.js");
Object.defineProperty(exports, "YkSeparator", { enumerable: true, get: function () { return index_js_16.YkSeparator; } });
var index_js_17 = require("./components/progress/index.js");
Object.defineProperty(exports, "YkProgress", { enumerable: true, get: function () { return index_js_17.YkProgress; } });
var defaults_js_1 = require("./config/defaults.js");
Object.defineProperty(exports, "defaultConfig", { enumerable: true, get: function () { return defaults_js_1.defaultConfig; } });
var theme_js_1 = require("./config/theme.js");
Object.defineProperty(exports, "toCssVariables", { enumerable: true, get: function () { return theme_js_1.toCssVariables; } });
Object.defineProperty(exports, "mergeConfig", { enumerable: true, get: function () { return theme_js_1.mergeConfig; } });
Object.defineProperty(exports, "tokenKeys", { enumerable: true, get: function () { return theme_js_1.tokenKeys; } });
var plugin_js_1 = require("./plugin.js");
Object.defineProperty(exports, "createYuanKit", { enumerable: true, get: function () { return plugin_js_1.createYuanKit; } });
var index_js_18 = require("./components/slider/index.js");
Object.defineProperty(exports, "YkSlider", { enumerable: true, get: function () { return index_js_18.YkSlider; } });
var index_js_19 = require("./components/accordion/index.js");
Object.defineProperty(exports, "YkAccordion", { enumerable: true, get: function () { return index_js_19.YkAccordion; } });
var index_js_20 = require("./components/breadcrumb/index.js");
Object.defineProperty(exports, "YkBreadcrumb", { enumerable: true, get: function () { return index_js_20.YkBreadcrumb; } });
var index_js_21 = require("./components/pagination/index.js");
Object.defineProperty(exports, "YkPagination", { enumerable: true, get: function () { return index_js_21.YkPagination; } });
var index_js_22 = require("./components/skeleton/index.js");
Object.defineProperty(exports, "YkSkeleton", { enumerable: true, get: function () { return index_js_22.YkSkeleton; } });
var index_js_23 = require("./components/empty-state/index.js");
Object.defineProperty(exports, "YkEmptyState", { enumerable: true, get: function () { return index_js_23.YkEmptyState; } });
var index_js_24 = require("./blocks/index.js");
Object.defineProperty(exports, "YkNavbar", { enumerable: true, get: function () { return index_js_24.YkNavbar; } });
Object.defineProperty(exports, "YkHero", { enumerable: true, get: function () { return index_js_24.YkHero; } });
Object.defineProperty(exports, "YkCta", { enumerable: true, get: function () { return index_js_24.YkCta; } });
Object.defineProperty(exports, "YkFooter", { enumerable: true, get: function () { return index_js_24.YkFooter; } });
Object.defineProperty(exports, "YkAnnouncement", { enumerable: true, get: function () { return index_js_24.YkAnnouncement; } });
var index_js_25 = require("./templates/index.js");
Object.defineProperty(exports, "YkStatusPage", { enumerable: true, get: function () { return index_js_25.YkStatusPage; } });
var index_js_26 = require("./components/spinner/index.js");
Object.defineProperty(exports, "YkSpinner", { enumerable: true, get: function () { return index_js_26.YkSpinner; } });
var index_js_27 = require("./components/toggle/index.js");
Object.defineProperty(exports, "YkToggle", { enumerable: true, get: function () { return index_js_27.YkToggle; } });
var index_js_28 = require("./components/button-group/index.js");
Object.defineProperty(exports, "YkButtonGroup", { enumerable: true, get: function () { return index_js_28.YkButtonGroup; } });
var index_js_29 = require("./components/table/index.js");
Object.defineProperty(exports, "YkTable", { enumerable: true, get: function () { return index_js_29.YkTable; } });
var index_js_30 = require("./components/popover/index.js");
Object.defineProperty(exports, "YkPopover", { enumerable: true, get: function () { return index_js_30.YkPopover; } });
var index_js_31 = require("./components/drawer/index.js");
Object.defineProperty(exports, "YkDrawer", { enumerable: true, get: function () { return index_js_31.YkDrawer; } });
var index_js_32 = require("./components/dropdown-menu/index.js");
Object.defineProperty(exports, "YkDropdownMenu", { enumerable: true, get: function () { return index_js_32.YkDropdownMenu; } });
var index_js_33 = require("./components/combobox/index.js");
Object.defineProperty(exports, "YkCombobox", { enumerable: true, get: function () { return index_js_33.YkCombobox; } });
var index_js_34 = require("./components/scroll-area/index.js");
Object.defineProperty(exports, "YkScrollArea", { enumerable: true, get: function () { return index_js_34.YkScrollArea; } });
var index_js_35 = require("./components/stepper/index.js");
Object.defineProperty(exports, "YkStepper", { enumerable: true, get: function () { return index_js_35.YkStepper; } });
var index_js_36 = require("./blocks/extended/index.js");
Object.defineProperty(exports, "YkFeatureGrid", { enumerable: true, get: function () { return index_js_36.YkFeatureGrid; } });
Object.defineProperty(exports, "YkStats", { enumerable: true, get: function () { return index_js_36.YkStats; } });
Object.defineProperty(exports, "YkLogoCloud", { enumerable: true, get: function () { return index_js_36.YkLogoCloud; } });
Object.defineProperty(exports, "YkPricing", { enumerable: true, get: function () { return index_js_36.YkPricing; } });
Object.defineProperty(exports, "YkFaq", { enumerable: true, get: function () { return index_js_36.YkFaq; } });
Object.defineProperty(exports, "YkTestimonials", { enumerable: true, get: function () { return index_js_36.YkTestimonials; } });
Object.defineProperty(exports, "YkNewsletter", { enumerable: true, get: function () { return index_js_36.YkNewsletter; } });
Object.defineProperty(exports, "YkContact", { enumerable: true, get: function () { return index_js_36.YkContact; } });
Object.defineProperty(exports, "YkSteps", { enumerable: true, get: function () { return index_js_36.YkSteps; } });
Object.defineProperty(exports, "YkBentoGrid", { enumerable: true, get: function () { return index_js_36.YkBentoGrid; } });
var index_js_37 = require("./templates/extended/index.js");
Object.defineProperty(exports, "YkPageTemplate", { enumerable: true, get: function () { return index_js_37.YkPageTemplate; } });
var index_js_38 = require("./components/calendar/index.js");
Object.defineProperty(exports, "YkCalendar", { enumerable: true, get: function () { return index_js_38.YkCalendar; } });
var index_js_39 = require("./components/date-picker/index.js");
Object.defineProperty(exports, "YkDatePicker", { enumerable: true, get: function () { return index_js_39.YkDatePicker; } });
var index_js_40 = require("./components/file-upload/index.js");
Object.defineProperty(exports, "YkFileUpload", { enumerable: true, get: function () { return index_js_40.YkFileUpload; } });
var index_js_41 = require("./components/tree/index.js");
Object.defineProperty(exports, "YkTree", { enumerable: true, get: function () { return index_js_41.YkTree; } });
var index_js_42 = require("./components/carousel/index.js");
Object.defineProperty(exports, "YkCarousel", { enumerable: true, get: function () { return index_js_42.YkCarousel; } });
var index_js_43 = require("./components/toast/index.js");
Object.defineProperty(exports, "YkToast", { enumerable: true, get: function () { return index_js_43.YkToast; } });
var index_js_44 = require("./components/command/index.js");
Object.defineProperty(exports, "YkCommand", { enumerable: true, get: function () { return index_js_44.YkCommand; } });
var index_js_45 = require("./components/sidebar/index.js");
Object.defineProperty(exports, "YkSidebar", { enumerable: true, get: function () { return index_js_45.YkSidebar; } });
var index_js_46 = require("./components/chart/index.js");
Object.defineProperty(exports, "YkChart", { enumerable: true, get: function () { return index_js_46.YkChart; } });
var index_js_47 = require("./components/tags-input/index.js");
Object.defineProperty(exports, "YkTagsInput", { enumerable: true, get: function () { return index_js_47.YkTagsInput; } });
var index_js_48 = require("./ai/ai-streaming-text/index.js");
Object.defineProperty(exports, "YkAIStreamingText", { enumerable: true, get: function () { return index_js_48.YkAIStreamingText; } });
var index_js_49 = require("./ai/ai-message/index.js");
Object.defineProperty(exports, "YkAIMessage", { enumerable: true, get: function () { return index_js_49.YkAIMessage; } });
var index_js_50 = require("./ai/ai-conversation/index.js");
Object.defineProperty(exports, "YkAIConversation", { enumerable: true, get: function () { return index_js_50.YkAIConversation; } });
var index_js_51 = require("./ai/ai-model-select/index.js");
Object.defineProperty(exports, "YkAIModelSelect", { enumerable: true, get: function () { return index_js_51.YkAIModelSelect; } });
var index_js_52 = require("./ai/ai-attachments/index.js");
Object.defineProperty(exports, "YkAIAttachments", { enumerable: true, get: function () { return index_js_52.YkAIAttachments; } });
var index_js_53 = require("./ai/ai-prompt-input/index.js");
Object.defineProperty(exports, "YkAIPromptInput", { enumerable: true, get: function () { return index_js_53.YkAIPromptInput; } });
var index_js_54 = require("./ai/ai-tool-call/index.js");
Object.defineProperty(exports, "YkAIToolCall", { enumerable: true, get: function () { return index_js_54.YkAIToolCall; } });
var index_js_55 = require("./ai/ai-sources/index.js");
Object.defineProperty(exports, "YkAISources", { enumerable: true, get: function () { return index_js_55.YkAISources; } });
var index_js_56 = require("./ai/ai-activity/index.js");
Object.defineProperty(exports, "YkAIActivity", { enumerable: true, get: function () { return index_js_56.YkAIActivity; } });
var index_js_57 = require("./ai/ai-suggestions/index.js");
Object.defineProperty(exports, "YkAISuggestions", { enumerable: true, get: function () { return index_js_57.YkAISuggestions; } });
var index_js_58 = require("./ai/ai-artifact/index.js");
Object.defineProperty(exports, "YkAIArtifact", { enumerable: true, get: function () { return index_js_58.YkAIArtifact; } });
var index_js_59 = require("./ai/ai-usage/index.js");
Object.defineProperty(exports, "YkAIUsage", { enumerable: true, get: function () { return index_js_59.YkAIUsage; } });
var index_js_60 = require("./blocks/ai-knowledge-panel/index.js");
Object.defineProperty(exports, "YkAIKnowledgePanel", { enumerable: true, get: function () { return index_js_60.YkAIKnowledgePanel; } });
var index_js_61 = require("./blocks/ai-assistant-dock/index.js");
Object.defineProperty(exports, "YkAIAssistantDock", { enumerable: true, get: function () { return index_js_61.YkAIAssistantDock; } });
var index_js_62 = require("./templates/ai-chat-page/index.js");
Object.defineProperty(exports, "YkAIChatPage", { enumerable: true, get: function () { return index_js_62.YkAIChatPage; } });

},{"./components/config-provider/index.js":"packages/vue/src/components/config-provider/index.js","./components/button/index.js":"packages/vue/src/components/button/index.js","./components/input/index.js":"packages/vue/src/components/input/index.js","./components/textarea/index.js":"packages/vue/src/components/textarea/index.js","./components/checkbox/index.js":"packages/vue/src/components/checkbox/index.js","./components/switch/index.js":"packages/vue/src/components/switch/index.js","./components/radio-group/index.js":"packages/vue/src/components/radio-group/index.js","./components/select/index.js":"packages/vue/src/components/select/index.js","./components/dialog/index.js":"packages/vue/src/components/dialog/index.js","./components/tabs/index.js":"packages/vue/src/components/tabs/index.js","./components/tooltip/index.js":"packages/vue/src/components/tooltip/index.js","./components/badge/index.js":"packages/vue/src/components/badge/index.js","./components/card/index.js":"packages/vue/src/components/card/index.js","./components/alert/index.js":"packages/vue/src/components/alert/index.js","./components/avatar/index.js":"packages/vue/src/components/avatar/index.js","./components/separator/index.js":"packages/vue/src/components/separator/index.js","./components/progress/index.js":"packages/vue/src/components/progress/index.js","./config/defaults.js":"packages/vue/src/config/defaults.js","./config/theme.js":"packages/vue/src/config/theme.js","./plugin.js":"packages/vue/src/plugin.js","./components/slider/index.js":"packages/vue/src/components/slider/index.js","./components/accordion/index.js":"packages/vue/src/components/accordion/index.js","./components/breadcrumb/index.js":"packages/vue/src/components/breadcrumb/index.js","./components/pagination/index.js":"packages/vue/src/components/pagination/index.js","./components/skeleton/index.js":"packages/vue/src/components/skeleton/index.js","./components/empty-state/index.js":"packages/vue/src/components/empty-state/index.js","./blocks/index.js":"packages/vue/src/blocks/index.js","./templates/index.js":"packages/vue/src/templates/index.js","./components/spinner/index.js":"packages/vue/src/components/spinner/index.js","./components/toggle/index.js":"packages/vue/src/components/toggle/index.js","./components/button-group/index.js":"packages/vue/src/components/button-group/index.js","./components/table/index.js":"packages/vue/src/components/table/index.js","./components/popover/index.js":"packages/vue/src/components/popover/index.js","./components/drawer/index.js":"packages/vue/src/components/drawer/index.js","./components/dropdown-menu/index.js":"packages/vue/src/components/dropdown-menu/index.js","./components/combobox/index.js":"packages/vue/src/components/combobox/index.js","./components/scroll-area/index.js":"packages/vue/src/components/scroll-area/index.js","./components/stepper/index.js":"packages/vue/src/components/stepper/index.js","./blocks/extended/index.js":"packages/vue/src/blocks/extended/index.js","./templates/extended/index.js":"packages/vue/src/templates/extended/index.js","./components/calendar/index.js":"packages/vue/src/components/calendar/index.js","./components/date-picker/index.js":"packages/vue/src/components/date-picker/index.js","./components/file-upload/index.js":"packages/vue/src/components/file-upload/index.js","./components/tree/index.js":"packages/vue/src/components/tree/index.js","./components/carousel/index.js":"packages/vue/src/components/carousel/index.js","./components/toast/index.js":"packages/vue/src/components/toast/index.js","./components/command/index.js":"packages/vue/src/components/command/index.js","./components/sidebar/index.js":"packages/vue/src/components/sidebar/index.js","./components/chart/index.js":"packages/vue/src/components/chart/index.js","./components/tags-input/index.js":"packages/vue/src/components/tags-input/index.js","./ai/ai-streaming-text/index.js":"packages/vue/src/ai/ai-streaming-text/index.js","./ai/ai-message/index.js":"packages/vue/src/ai/ai-message/index.js","./ai/ai-conversation/index.js":"packages/vue/src/ai/ai-conversation/index.js","./ai/ai-model-select/index.js":"packages/vue/src/ai/ai-model-select/index.js","./ai/ai-attachments/index.js":"packages/vue/src/ai/ai-attachments/index.js","./ai/ai-prompt-input/index.js":"packages/vue/src/ai/ai-prompt-input/index.js","./ai/ai-tool-call/index.js":"packages/vue/src/ai/ai-tool-call/index.js","./ai/ai-sources/index.js":"packages/vue/src/ai/ai-sources/index.js","./ai/ai-activity/index.js":"packages/vue/src/ai/ai-activity/index.js","./ai/ai-suggestions/index.js":"packages/vue/src/ai/ai-suggestions/index.js","./ai/ai-artifact/index.js":"packages/vue/src/ai/ai-artifact/index.js","./ai/ai-usage/index.js":"packages/vue/src/ai/ai-usage/index.js","./blocks/ai-knowledge-panel/index.js":"packages/vue/src/blocks/ai-knowledge-panel/index.js","./blocks/ai-assistant-dock/index.js":"packages/vue/src/blocks/ai-assistant-dock/index.js","./templates/ai-chat-page/index.js":"packages/vue/src/templates/ai-chat-page/index.js"}],
"packages/vue/src/components/config-provider/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkConfigProvider = void 0;
const vue_1 = require("vue");
const context_js_1 = require("../../config/context.js");
const theme_js_1 = require("../../config/theme.js");
exports.YkConfigProvider = (0, vue_1.defineComponent)({
    name: 'YkConfigProvider', inheritAttrs: false,
    props: { skin: String, mode: String, density: String, size: String, motion: { type: Boolean, default: undefined }, locale: String, tokens: Object },
    setup(props, { slots, attrs }) {
        const parent = (0, context_js_1.useYuanConfig)();
        const config = (0, vue_1.computed)(() => (0, theme_js_1.mergeConfig)(parent.value, props));
        (0, vue_1.provide)(context_js_1.CONFIG_KEY, config);
        return () => (0, vue_1.h)('div', (0, vue_1.mergeProps)((0, theme_js_1.themeAttrs)(config.value), attrs), slots.default?.());
    }
});

},{"vue":"vue","../../config/context.js":"packages/vue/src/config/context.js","../../config/theme.js":"packages/vue/src/config/theme.js"}],
"packages/vue/src/config/context.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_KEY = void 0;
exports.useYuanConfig = useYuanConfig;
exports.useMessages = useMessages;
const vue_1 = require("vue");
const defaults_js_1 = require("./defaults.js");
exports.CONFIG_KEY = Symbol('YuanKit config');
function useYuanConfig() { return (0, vue_1.inject)(exports.CONFIG_KEY, (0, vue_1.computed)(() => defaults_js_1.defaultConfig)); }
function useMessages() { const config = useYuanConfig(); return (0, vue_1.computed)(() => defaults_js_1.messages[config.value.locale]); }

},{"vue":"vue","./defaults.js":"packages/vue/src/config/defaults.js"}],
"packages/vue/src/config/defaults.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = exports.defaultConfig = void 0;
/** Change library-wide behavioral defaults here; visual values live in tokens.json. */
exports.defaultConfig = Object.freeze({
    skin: 'soft', mode: 'light', density: 'comfortable', size: 'md',
    motion: true, locale: 'zh-CN', tokens: Object.freeze({})
});
exports.messages = {
    'zh-CN': { close: '关闭', clear: '清空', loading: '加载中', required: '必填', choose: '请选择' },
    'en-US': { close: 'Close', clear: 'Clear', loading: 'Loading', required: 'Required', choose: 'Choose an option' }
};

},{}],
"packages/vue/src/config/theme.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenKeys = void 0;
exports.toCssVariables = toCssVariables;
exports.mergeConfig = mergeConfig;
exports.themeAttrs = themeAttrs;
const token_keys_js_1 = require("./token-keys.js");
var token_keys_js_2 = require("./token-keys.js");
Object.defineProperty(exports, "tokenKeys", { enumerable: true, get: function () { return token_keys_js_2.tokenKeys; } });
/** Reject accidental unknown tokens and CSS declaration injection. Never accept untrusted styles. */
function toCssVariables(tokens = {}) {
    const out = {};
    for (const [key, value] of Object.entries(tokens)) {
        if (!token_keys_js_1.tokenKeys.includes(key))
            throw new TypeError(`Unknown YuanKit token: ${key}`);
        if (typeof value !== 'string' || /[;{}<>]/.test(value))
            throw new TypeError(`Invalid token value: ${key}`);
        out[`--yk-${key}`] = value;
    }
    return out;
}
function mergeConfig(parent, options = {}) {
    const result = { ...parent };
    for (const key of ['skin', 'mode', 'density', 'size', 'motion', 'locale']) {
        if (options[key] !== undefined)
            result[key] = options[key];
    }
    for (const [key, choices] of Object.entries({ skin: ['soft', 'precise'], mode: ['light', 'dark'], density: ['comfortable', 'compact'], size: ['sm', 'md', 'lg'], locale: ['zh-CN', 'en-US'] })) {
        if (!choices.includes(result[key]))
            throw new TypeError(`Invalid YuanKit ${key}: ${result[key]}`);
    }
    if (typeof result.motion !== 'boolean')
        throw new TypeError('YuanKit motion must be a boolean.');
    result.tokens = { ...parent.tokens, ...options.tokens };
    toCssVariables(result.tokens);
    return result;
}
function themeAttrs(config) {
    return {
        class: 'yk-theme', 'data-yk-skin': config.skin, 'data-yk-mode': config.mode,
        'data-yk-density': config.density, 'data-yk-motion': String(config.motion),
        style: { ...toCssVariables(config.tokens), ...(config.motion ? {} : { '--yk-duration': '0ms' }) }
    };
}

},{"./token-keys.js":"packages/vue/src/config/token-keys.js"}],
"packages/vue/src/config/token-keys.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenKeys = void 0;
// Generated by scripts/build.mjs from tokens.json. Do not edit.
exports.tokenKeys = ["background", "border", "control-padding", "danger", "danger-soft", "duration", "ease", "field-background", "focus", "focus-width", "font", "font-size", "height-lg", "height-md", "height-sm", "line-height", "muted", "on-primary", "overlay", "panel-padding", "primary", "primary-hover", "primary-soft", "radius-control", "radius-panel", "radius-pill", "shadow", "space-1", "space-2", "space-3", "space-4", "space-6", "space-8", "success", "success-soft", "surface", "surface-raised", "text", "text-muted", "warning", "warning-soft", "z-tooltip"];

},{}],
"packages/vue/src/components/button/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkButton = void 0;
const vue_1 = require("vue");
const context_js_1 = require("../../config/context.js");
exports.YkButton = (0, vue_1.defineComponent)({
    name: 'YkButton', inheritAttrs: false,
    props: { variant: { type: String, default: 'primary' }, size: String, disabled: Boolean, loading: Boolean, block: Boolean, iconOnly: Boolean, type: { type: String, default: 'button' } },
    emits: ['click'],
    setup(props, { slots, attrs, emit }) {
        const config = (0, context_js_1.useYuanConfig)(), t = (0, context_js_1.useMessages)();
        const size = (0, vue_1.computed)(() => props.size || config.value.size);
        return () => (0, vue_1.h)('button', (0, vue_1.mergeProps)(attrs, {
            class: ['yk-button', `yk-button--${props.variant}`, `yk-size--${size.value}`, { 'yk-button--block': props.block, 'yk-button--icon': props.iconOnly }],
            type: props.type, disabled: props.disabled || props.loading, 'aria-busy': props.loading || undefined, 'data-loading': props.loading || undefined,
            onClick: e => { if (!props.disabled && !props.loading)
                emit('click', e); }
        }), [
            props.loading ? (0, vue_1.h)('span', { class: 'yk-spinner', 'aria-hidden': 'true' }) : slots.leading?.(),
            (0, vue_1.h)('span', { class: 'yk-button__label' }, slots.default?.()), slots.trailing?.(),
            props.loading ? (0, vue_1.h)('span', { class: 'yk-sr-only' }, t.value.loading) : null
        ]);
    }
});

},{"vue":"vue","../../config/context.js":"packages/vue/src/config/context.js"}],
"packages/vue/src/components/input/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkInput = void 0;
const vue_1 = require("vue");
const context_js_1 = require("../../config/context.js");
const control_js_1 = require("../../shared/control.js");
const icons_js_1 = require("../../shared/icons.js");
exports.YkInput = (0, vue_1.defineComponent)({
    name: 'YkInput', inheritAttrs: false,
    props: { modelValue: String, defaultValue: String, id: String, label: String, description: String, error: String, size: String, disabled: Boolean, readonly: Boolean, required: Boolean, clearable: Boolean, type: { type: String, default: 'text' } },
    emits: ['update:modelValue', 'change', 'clear'],
    setup(props, { slots, attrs, emit, expose }) {
        const config = (0, context_js_1.useYuanConfig)(), t = (0, context_js_1.useMessages)(), uid = (0, vue_1.useId)(), input = (0, vue_1.ref)(null), composing = (0, vue_1.ref)(false);
        const id = (0, vue_1.computed)(() => props.id || `yk-input-${uid}`), model = (0, control_js_1.useControllable)(props, emit);
        const update = e => { if (!composing.value && !props.disabled && !props.readonly)
            model.set(e.target.value); };
        expose({ focus: () => input.value?.focus(), blur: () => input.value?.blur() });
        return () => (0, vue_1.h)('div', { class: ['yk-field', { 'yk-field--error': !!props.error, 'yk-field--disabled': props.disabled }] }, [
            props.label ? (0, vue_1.h)('label', { class: 'yk-field__label', for: id.value }, [props.label, props.required ? (0, vue_1.h)('span', { 'aria-hidden': 'true', class: 'yk-required' }, ' *') : null]) : null,
            (0, vue_1.h)('div', { class: ['yk-input-wrap', `yk-size--${props.size || config.value.size}`] }, [
                slots.leading ? (0, vue_1.h)('span', { class: 'yk-field__adornment' }, slots.leading()) : null,
                (0, vue_1.h)('input', (0, vue_1.mergeProps)(attrs, {
                    ref: input, id: id.value, class: 'yk-input', type: props.type, value: model.value.value, disabled: props.disabled, readonly: props.readonly, required: props.required,
                    'aria-invalid': props.error ? 'true' : undefined, 'aria-describedby': (0, control_js_1.describedBy)(attrs, props.description ? `${id.value}-description` : null, props.error ? `${id.value}-error` : null),
                    onInput: update, onCompositionstart: () => { composing.value = true; }, onCompositionend: e => { composing.value = false; update(e); }, onChange: e => emit('change', e.target.value)
                })),
                props.clearable && model.value.value && !props.disabled && !props.readonly ? (0, vue_1.h)('button', { type: 'button', class: 'yk-icon-button', 'aria-label': `${t.value.clear}${props.label ? ' ' + props.label : ''}`, onClick: () => { model.set(''); emit('clear'); input.value?.focus(); } }, (0, icons_js_1.icon)('close', 14)) : null,
                slots.trailing ? (0, vue_1.h)('span', { class: 'yk-field__adornment' }, slots.trailing()) : null
            ]),
            props.description ? (0, vue_1.h)('p', { id: `${id.value}-description`, class: 'yk-field__description' }, props.description) : null,
            props.error ? (0, vue_1.h)('p', { id: `${id.value}-error`, class: 'yk-field__error' }, props.error) : null
        ]);
    }
});

},{"vue":"vue","../../config/context.js":"packages/vue/src/config/context.js","../../shared/control.js":"packages/vue/src/shared/control.js","../../shared/icons.js":"packages/vue/src/shared/icons.js"}],
"packages/vue/src/shared/control.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useControllable = useControllable;
exports.describedBy = describedBy;
const vue_1 = require("vue");
/** Undefined means uncontrolled. False, zero and empty-string are valid controlled values. */
function useControllable(props, emit, key = 'modelValue', fallback = '') {
    const local = (0, vue_1.ref)(props.defaultValue ?? fallback);
    const value = (0, vue_1.computed)(() => props[key] !== undefined ? props[key] : local.value);
    const set = (next) => {
        if (Object.is(value.value, next))
            return;
        if (props[key] === undefined)
            local.value = next;
        emit(`update:${key}`, next);
    };
    return { value, set };
}
function describedBy(attrs, ...ids) {
    return [attrs['aria-describedby'], ...ids].filter(Boolean).join(' ') || undefined;
}

},{"vue":"vue"}],
"packages/vue/src/shared/icons.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icon = icon;
const vue_1 = require("vue");
const paths = {
    close: 'M6 6l12 12M18 6L6 18', check: 'M5 12l4 4L19 6',
    arrow: 'M5 12h14M13 6l6 6-6 6', chevron: 'M6 9l6 6 6-6',
    info: 'M12 10v7M12 6.5v.5', search: 'm16 16 4 4',
    moon: 'M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10Z',
    sun: 'M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1',
    plus: 'M12 5v14M5 12h14', code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16',
    grid: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z'
};
function icon(name, size = 18) {
    return (0, vue_1.h)('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.7, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' }, [
        name === 'info' ? (0, vue_1.h)('circle', { cx: 12, cy: 12, r: 9 }) : null,
        name === 'search' ? (0, vue_1.h)('circle', { cx: 10.5, cy: 10.5, r: 6.5 }) : null,
        name === 'sun' ? (0, vue_1.h)('circle', { cx: 12, cy: 12, r: 4 }) : null,
        (0, vue_1.h)('path', { d: paths[name] || paths.info })
    ]);
}

},{"vue":"vue"}],
"packages/vue/src/components/textarea/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkTextarea = void 0;
const vue_1 = require("vue");
const context_js_1 = require("../../config/context.js");
const control_js_1 = require("../../shared/control.js");
exports.YkTextarea = (0, vue_1.defineComponent)({
    name: 'YkTextarea', inheritAttrs: false,
    props: { modelValue: String, defaultValue: String, id: String, label: String, description: String, error: String, disabled: Boolean, readonly: Boolean, required: Boolean, rows: { type: Number, default: 4 }, maxlength: Number, showCount: Boolean },
    emits: ['update:modelValue', 'change'],
    setup(props, { attrs, emit, expose }) {
        const uid = (0, vue_1.useId)(), el = (0, vue_1.ref)(null), composing = (0, vue_1.ref)(false), model = (0, control_js_1.useControllable)(props, emit), id = (0, vue_1.computed)(() => props.id || `yk-textarea-${uid}`);
        const update = e => { if (!composing.value && !props.disabled && !props.readonly)
            model.set(e.target.value); };
        expose({ focus: () => el.value?.focus() });
        return () => (0, vue_1.h)('div', { class: ['yk-field', { 'yk-field--error': !!props.error, 'yk-field--disabled': props.disabled }] }, [
            props.label ? (0, vue_1.h)('label', { for: id.value, class: 'yk-field__label' }, props.label) : null,
            (0, vue_1.h)('textarea', (0, vue_1.mergeProps)(attrs, { ref: el, id: id.value, class: 'yk-textarea', value: model.value.value, rows: props.rows, maxlength: props.maxlength, disabled: props.disabled, readonly: props.readonly, required: props.required,
                'aria-invalid': props.error ? 'true' : undefined, 'aria-describedby': (0, control_js_1.describedBy)(attrs, props.description ? `${id.value}-description` : null, props.error ? `${id.value}-error` : null),
                onInput: update, onCompositionstart: () => { composing.value = true; }, onCompositionend: e => { composing.value = false; update(e); }, onChange: e => emit('change', e.target.value)
            })),
            props.showCount ? (0, vue_1.h)('span', { class: 'yk-field__count' }, `${model.value.value.length}${props.maxlength ? ` / ${props.maxlength}` : ''}`) : null,
            props.description ? (0, vue_1.h)('p', { id: `${id.value}-description`, class: 'yk-field__description' }, props.description) : null,
            props.error ? (0, vue_1.h)('p', { id: `${id.value}-error`, class: 'yk-field__error' }, props.error) : null
        ]);
    }
});

},{"vue":"vue","../../config/context.js":"packages/vue/src/config/context.js","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/components/checkbox/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkCheckbox = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
exports.YkCheckbox = (0, vue_1.defineComponent)({
    name: 'YkCheckbox', inheritAttrs: false,
    props: { modelValue: { type: Boolean, default: undefined }, defaultValue: Boolean, indeterminate: Boolean, disabled: Boolean, required: Boolean, label: String, description: String, id: String, name: String, value: { type: String, default: 'on' } },
    emits: ['update:modelValue', 'change'],
    setup(props, { slots, attrs, emit }) {
        const model = (0, control_js_1.useControllable)(props, emit, 'modelValue', false), input = (0, vue_1.ref)(null), uid = (0, vue_1.useId)();
        (0, vue_1.watchEffect)(() => { if (input.value)
            input.value.indeterminate = props.indeterminate; });
        return () => {
            const id = props.id || `yk-check-${uid}`;
            return (0, vue_1.h)('label', { class: ['yk-check', { 'yk-check--disabled': props.disabled }], for: id }, [
                (0, vue_1.h)('input', (0, vue_1.mergeProps)(attrs, { ref: input, type: 'checkbox', id, name: props.name, value: props.value, checked: model.value.value, disabled: props.disabled, required: props.required, 'aria-describedby': (0, control_js_1.describedBy)(attrs, props.description ? `${id}-description` : null), onChange: e => { model.set(e.target.checked); emit('change', e.target.checked); } })),
                (0, vue_1.h)('span', { class: 'yk-check__copy' }, [slots.default?.() || props.label, props.description ? (0, vue_1.h)('small', { id: `${id}-description` }, props.description) : null])
            ]);
        };
    }
});

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/components/switch/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkSwitch = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
exports.YkSwitch = (0, vue_1.defineComponent)({
    name: 'YkSwitch', inheritAttrs: false,
    props: { modelValue: { type: Boolean, default: undefined }, defaultValue: Boolean, disabled: Boolean, label: String, description: String, id: String, name: String, value: { type: String, default: 'on' } },
    emits: ['update:modelValue', 'change'],
    setup(props, { slots, attrs, emit }) {
        const model = (0, control_js_1.useControllable)(props, emit, 'modelValue', false), uid = (0, vue_1.useId)();
        return () => {
            const id = props.id || `yk-switch-${uid}`;
            return (0, vue_1.h)('label', { for: id, class: ['yk-switch', { 'yk-switch--disabled': props.disabled }] }, [
                (0, vue_1.h)('span', { class: 'yk-switch__control' }, [
                    (0, vue_1.h)('input', (0, vue_1.mergeProps)(attrs, { type: 'checkbox', role: 'switch', id, name: props.name, value: props.value, checked: model.value.value, disabled: props.disabled, 'aria-describedby': (0, control_js_1.describedBy)(attrs, props.description ? `${id}-description` : null), onChange: e => { model.set(e.target.checked); emit('change', e.target.checked); } })),
                    (0, vue_1.h)('span', { class: 'yk-switch__track', 'aria-hidden': 'true' }, (0, vue_1.h)('span', { class: 'yk-switch__thumb' }))
                ]),
                (0, vue_1.h)('span', { class: 'yk-switch__copy' }, [slots.default?.() || props.label, props.description ? (0, vue_1.h)('small', { id: `${id}-description` }, props.description) : null])
            ]);
        };
    }
});

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/components/radio-group/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkRadioGroup = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
exports.YkRadioGroup = (0, vue_1.defineComponent)({
    name: 'YkRadioGroup', inheritAttrs: false,
    props: { modelValue: String, defaultValue: String, label: { type: String, required: true }, name: String, options: { type: Array, default: () => [] }, disabled: Boolean, required: Boolean, orientation: { type: String, default: 'horizontal' } },
    emits: ['update:modelValue', 'change'],
    setup(props, { attrs, emit }) {
        const model = (0, control_js_1.useControllable)(props, emit), uid = (0, vue_1.useId)();
        return () => (0, vue_1.h)('fieldset', (0, vue_1.mergeProps)(attrs, { class: ['yk-radio-group', `yk-radio-group--${props.orientation}`], disabled: props.disabled }), [
            (0, vue_1.h)('legend', { class: 'yk-field__label' }, props.label),
            ...props.options.map(option => (0, vue_1.h)('label', { class: 'yk-radio', key: option.value }, [
                (0, vue_1.h)('input', { type: 'radio', name: props.name || `yk-radio-${uid}`, value: option.value, checked: model.value.value === option.value, disabled: props.disabled || option.disabled, required: props.required, onChange: () => { model.set(option.value); emit('change', option.value); } }),
                (0, vue_1.h)('span', {}, option.label)
            ]))
        ]);
    }
});

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/components/select/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkSelect = void 0;
const vue_1 = require("vue");
const context_js_1 = require("../../config/context.js");
const control_js_1 = require("../../shared/control.js");
const icons_js_1 = require("../../shared/icons.js");
exports.YkSelect = (0, vue_1.defineComponent)({
    name: 'YkSelect', inheritAttrs: false,
    props: { modelValue: String, defaultValue: String, id: String, label: String, description: String, error: String, placeholder: String, size: String, options: { type: Array, default: () => [] }, disabled: Boolean, required: Boolean, clearable: Boolean },
    emits: ['update:modelValue', 'change'],
    setup(props, { attrs, emit }) {
        const model = (0, control_js_1.useControllable)(props, emit), uid = (0, vue_1.useId)(), config = (0, context_js_1.useYuanConfig)(), t = (0, context_js_1.useMessages)();
        return () => {
            const id = props.id || `yk-select-${uid}`;
            return (0, vue_1.h)('div', { class: ['yk-field', { 'yk-field--error': !!props.error, 'yk-field--disabled': props.disabled }] }, [
                props.label ? (0, vue_1.h)('label', { for: id, class: 'yk-field__label' }, props.label) : null,
                (0, vue_1.h)('div', { class: ['yk-select-wrap', `yk-size--${props.size || config.value.size}`] }, [
                    (0, vue_1.h)('select', (0, vue_1.mergeProps)(attrs, { id, class: 'yk-select', value: model.value.value, disabled: props.disabled, required: props.required, 'aria-invalid': props.error ? 'true' : undefined, 'aria-describedby': (0, control_js_1.describedBy)(attrs, props.description ? `${id}-description` : null, props.error ? `${id}-error` : null), onChange: e => { model.set(e.target.value); emit('change', e.target.value); } }), [
                        (0, vue_1.h)('option', { value: '', disabled: !props.clearable }, props.placeholder || t.value.choose),
                        ...props.options.map(o => (0, vue_1.h)('option', { key: o.value, value: o.value, disabled: o.disabled }, o.label))
                    ]), (0, vue_1.h)('span', { class: 'yk-select__arrow' }, (0, icons_js_1.icon)('chevron', 16))
                ]),
                props.description ? (0, vue_1.h)('p', { id: `${id}-description`, class: 'yk-field__description' }, props.description) : null,
                props.error ? (0, vue_1.h)('p', { id: `${id}-error`, class: 'yk-field__error' }, props.error) : null
            ]);
        };
    }
});

},{"vue":"vue","../../config/context.js":"packages/vue/src/config/context.js","../../shared/control.js":"packages/vue/src/shared/control.js","../../shared/icons.js":"packages/vue/src/shared/icons.js"}],
"packages/vue/src/components/dialog/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkDialog = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
const context_js_1 = require("../../config/context.js");
const theme_js_1 = require("../../config/theme.js");
const icons_js_1 = require("../../shared/icons.js");
const scroll_lock_js_1 = require("../../shared/scroll-lock.js");
exports.YkDialog = (0, vue_1.defineComponent)({
    name: 'YkDialog', inheritAttrs: false,
    props: { open: { type: Boolean, default: undefined }, defaultValue: Boolean, title: { type: String, required: true }, description: String, size: { type: String, default: 'md' }, closeOnEscape: { type: Boolean, default: true }, closeOnBackdrop: { type: Boolean, default: true }, showClose: { type: Boolean, default: true } },
    emits: ['update:open', 'afterOpen', 'afterClose'],
    setup(props, { slots, attrs, emit, expose }) {
        const dialog = (0, vue_1.ref)(null), uid = (0, vue_1.useId)(), model = (0, control_js_1.useControllable)(props, emit, 'open', false), config = (0, context_js_1.useYuanConfig)(), t = (0, context_js_1.useMessages)();
        let disposed = false, opener = null, pressedOutside = false, releaseLock = () => { };
        const requestOpen = value => model.set(value);
        const sync = async () => {
            await (0, vue_1.nextTick)();
            const el = dialog.value;
            if (disposed || !el)
                return;
            if (model.value.value && !el.open) {
                opener = document.activeElement;
                el.showModal();
                releaseLock = (0, scroll_lock_js_1.acquireScrollLock)();
                emit('afterOpen');
            }
            else if (!model.value.value && el.open) {
                el.close();
                releaseLock();
            }
        };
        const outside = e => { const r = dialog.value?.getBoundingClientRect(); return r && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom); };
        (0, vue_1.watch)(model.value, sync);
        (0, vue_1.onMounted)(sync);
        (0, vue_1.onBeforeUnmount)(() => { disposed = true; if (dialog.value?.open)
            dialog.value.close(); releaseLock(); });
        expose({ open: () => requestOpen(true), close: () => requestOpen(false) });
        return () => (0, vue_1.h)('div', { class: 'yk-dialog-host' }, [
            slots.trigger?.({ open: () => requestOpen(true) }),
            (0, vue_1.h)('dialog', (0, vue_1.mergeProps)((0, theme_js_1.themeAttrs)(config.value), attrs, {
                ref: dialog, class: ['yk-dialog', `yk-dialog--${props.size}`], 'aria-labelledby': `yk-dialog-title-${uid}`, 'aria-describedby': props.description ? `yk-dialog-description-${uid}` : undefined,
                onCancel: e => { e.preventDefault(); if (props.closeOnEscape)
                    requestOpen(false); },
                onPointerdown: e => { pressedOutside = e.target === dialog.value && outside(e); },
                onClick: e => { if (props.closeOnBackdrop && pressedOutside && e.target === dialog.value && outside(e))
                    requestOpen(false); pressedOutside = false; },
                onClose: () => { if (disposed || dialog.value?.open)
                    return; releaseLock(); requestOpen(false); emit('afterClose'); if (opener?.isConnected && !opener.closest('[inert]'))
                    opener.focus(); }
            }), [
                (0, vue_1.h)('div', { class: 'yk-dialog__header' }, [
                    (0, vue_1.h)('div', {}, [(0, vue_1.h)('h2', { id: `yk-dialog-title-${uid}`, class: 'yk-dialog__title' }, props.title), props.description ? (0, vue_1.h)('p', { id: `yk-dialog-description-${uid}`, class: 'yk-dialog__description' }, props.description) : null]),
                    props.showClose ? (0, vue_1.h)('button', { type: 'button', class: 'yk-icon-button', 'aria-label': t.value.close, onClick: () => requestOpen(false) }, (0, icons_js_1.icon)('close')) : null
                ]),
                (0, vue_1.h)('div', { class: 'yk-dialog__body' }, slots.default?.({ close: () => requestOpen(false) })),
                slots.footer ? (0, vue_1.h)('div', { class: 'yk-dialog__footer' }, slots.footer({ close: () => requestOpen(false) })) : null
            ])
        ]);
    }
});

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js","../../config/context.js":"packages/vue/src/config/context.js","../../config/theme.js":"packages/vue/src/config/theme.js","../../shared/icons.js":"packages/vue/src/shared/icons.js","../../shared/scroll-lock.js":"packages/vue/src/shared/scroll-lock.js"}],
"packages/vue/src/shared/scroll-lock.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acquireScrollLock = acquireScrollLock;
// Shared by all dialog instances; release is idempotent and supports nesting.
let locks = 0;
let previous = '';
function acquireScrollLock() {
    if (typeof document === 'undefined')
        return () => { };
    if (locks === 0) {
        previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    }
    locks++;
    let released = false;
    return () => {
        if (released)
            return;
        released = true;
        locks = Math.max(0, locks - 1);
        if (locks === 0 && document.body.style.overflow === 'hidden')
            document.body.style.overflow = previous;
    };
}

},{}],
"packages/vue/src/components/tabs/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkTabs = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
exports.YkTabs = (0, vue_1.defineComponent)({
    name: 'YkTabs', inheritAttrs: false,
    props: { modelValue: String, defaultValue: String, items: { type: Array, default: () => [] }, label: { type: String, default: '选项卡' }, activation: { type: String, default: 'automatic' }, variant: { type: String, default: 'soft' } },
    emits: ['update:modelValue', 'change'],
    setup(props, { slots, attrs, emit }) {
        const uid = (0, vue_1.useId)(), model = (0, control_js_1.useControllable)(props, emit), focused = (0, vue_1.ref)(null);
        const buttons = new Map();
        const selected = () => props.items.some(i => i.value === model.value.value && !i.disabled) ? model.value.value : props.items.find(i => !i.disabled)?.value;
        const tabStop = () => props.items.some(i => i.value === focused.value && !i.disabled) ? focused.value : selected();
        const choose = value => { if (value !== selected()) {
            model.set(value);
            emit('change', value);
        } };
        const keydown = (e, index) => {
            const enabled = props.items.map((x, i) => x.disabled ? -1 : i).filter(i => i !== -1);
            let target;
            if (e.key === 'ArrowRight')
                target = enabled[(enabled.indexOf(index) + 1) % enabled.length];
            else if (e.key === 'ArrowLeft')
                target = enabled[(enabled.indexOf(index) - 1 + enabled.length) % enabled.length];
            else if (e.key === 'Home')
                target = enabled[0];
            else if (e.key === 'End')
                target = enabled.at(-1);
            else
                return;
            e.preventDefault();
            if (target === undefined)
                return;
            const value = props.items[target].value;
            focused.value = value;
            buttons.get(value)?.focus();
            if (props.activation === 'automatic')
                choose(value);
        };
        return () => (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { class: ['yk-tabs', `yk-tabs--${props.variant}`] }), [
            (0, vue_1.h)('div', { role: 'tablist', 'aria-label': props.label, class: 'yk-tabs__list' }, props.items.map((item, index) => (0, vue_1.h)('button', {
                key: item.value, ref: el => { if (el)
                    buttons.set(item.value, el);
                else
                    buttons.delete(item.value); }, type: 'button', role: 'tab', id: `yk-tab-${uid}-${index}`, 'aria-controls': `yk-panel-${uid}-${index}`, 'aria-selected': item.value === selected(), disabled: item.disabled, tabindex: !item.disabled && item.value === tabStop() ? 0 : -1, class: 'yk-tabs__trigger', onClick: () => { focused.value = item.value; choose(item.value); }, onKeydown: e => keydown(e, index)
            }, item.label))),
            ...props.items.map((item, index) => (0, vue_1.h)('div', { key: item.value, role: 'tabpanel', id: `yk-panel-${uid}-${index}`, 'aria-labelledby': `yk-tab-${uid}-${index}`, hidden: item.value !== selected(), tabindex: 0, class: 'yk-tabs__panel' }, slots[item.value]?.() || item.content || null))
        ]);
    }
});

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/components/tooltip/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkTooltip = void 0;
const vue_1 = require("vue");
const context_js_1 = require("../../config/context.js");
const theme_js_1 = require("../../config/theme.js");
exports.YkTooltip = (0, vue_1.defineComponent)({
    name: 'YkTooltip', inheritAttrs: false, props: { text: { type: String, required: true }, delay: { type: Number, default: 300 } },
    setup(props, { slots, attrs }) {
        const uid = (0, vue_1.useId)(), shown = (0, vue_1.ref)(false), anchor = (0, vue_1.ref)(null), bubble = (0, vue_1.ref)(null), position = (0, vue_1.ref)({ left: '0px', top: '0px' }), config = (0, context_js_1.useYuanConfig)();
        const target = (0, vue_1.ref)('body');
        let timer, hideTimer, hovered = false, focused = false, observer, disposed = false;
        const place = () => { if (!shown.value || !anchor.value || !bubble.value)
            return; const a = anchor.value.getBoundingClientRect(), b = bubble.value.getBoundingClientRect(); position.value = { left: `${Math.max(8, Math.min(innerWidth - b.width - 8, a.left + (a.width - b.width) / 2))}px`, top: `${a.top - b.height - 9 >= 8 ? a.top - b.height - 9 : Math.min(innerHeight - b.height - 8, a.bottom + 9)}px` }; };
        const hide = () => { clearTimeout(timer); clearTimeout(hideTimer); observer?.disconnect(); shown.value = false; window.removeEventListener('scroll', place, true); window.removeEventListener('resize', place); window.removeEventListener('keydown', escape); };
        const escape = e => { if (e.key === 'Escape')
            hide(); };
        const open = () => { clearTimeout(hideTimer); clearTimeout(timer); timer = setTimeout(async () => { target.value = anchor.value?.closest('dialog[open]') || 'body'; shown.value = true; await (0, vue_1.nextTick)(); if (disposed || !shown.value)
            return; place(); observer?.disconnect(); if (typeof ResizeObserver !== 'undefined') {
            observer = new ResizeObserver(place);
            if (anchor.value)
                observer.observe(anchor.value);
            if (bubble.value)
                observer.observe(bubble.value);
        } window.addEventListener('scroll', place, true); window.addEventListener('resize', place); window.addEventListener('keydown', escape); }, props.delay); };
        const maybeHide = () => { clearTimeout(timer); hideTimer = setTimeout(() => { if (!hovered && !focused)
            hide(); }, 100); };
        (0, vue_1.onBeforeUnmount)(() => { disposed = true; clearTimeout(timer); clearTimeout(hideTimer); hide(); });
        return () => (0, vue_1.h)('span', { class: 'yk-tooltip-anchor', ref: anchor, onMouseenter: () => { hovered = true; open(); }, onMouseleave: () => { hovered = false; maybeHide(); }, onFocusin: () => { focused = true; open(); }, onFocusout: () => { focused = false; maybeHide(); } }, [
            slots.default?.({ attrs: { 'aria-describedby': shown.value ? `yk-tooltip-${uid}` : undefined } }),
            shown.value ? (0, vue_1.h)(vue_1.Teleport, { to: target.value }, (0, vue_1.h)('div', (0, vue_1.mergeProps)((0, theme_js_1.themeAttrs)(config.value), attrs, { ref: bubble, id: `yk-tooltip-${uid}`, role: 'tooltip', class: 'yk-tooltip', style: position.value, onMouseenter: () => { hovered = true; clearTimeout(hideTimer); }, onMouseleave: () => { hovered = false; maybeHide(); } }), props.text)) : null
        ]);
    }
});

},{"vue":"vue","../../config/context.js":"packages/vue/src/config/context.js","../../config/theme.js":"packages/vue/src/config/theme.js"}],
"packages/vue/src/components/badge/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkBadge = void 0;
const vue_1 = require("vue");
exports.YkBadge = (0, vue_1.defineComponent)({ name: 'YkBadge', inheritAttrs: false, props: { tone: { type: String, default: 'neutral' }, variant: { type: String, default: 'soft' }, dot: Boolean }, setup(props, { slots, attrs }) { return () => (0, vue_1.h)('span', (0, vue_1.mergeProps)(attrs, { class: ['yk-badge', `yk-tone--${props.tone}`, `yk-badge--${props.variant}`] }), [props.dot ? (0, vue_1.h)('span', { class: 'yk-badge__dot', 'aria-hidden': 'true' }) : null, slots.default?.()]); } });

},{"vue":"vue"}],
"packages/vue/src/components/card/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkCard = void 0;
const vue_1 = require("vue");
exports.YkCard = (0, vue_1.defineComponent)({ name: 'YkCard', inheritAttrs: false, props: { title: String, description: String, as: { type: String, default: 'section' }, variant: { type: String, default: 'outlined' } }, setup(props, { slots, attrs }) {
        return () => (0, vue_1.h)(['section', 'article', 'div'].includes(props.as) ? props.as : 'section', (0, vue_1.mergeProps)(attrs, { class: ['yk-card', `yk-card--${props.variant}`] }), [
            slots.header ? (0, vue_1.h)('header', { class: 'yk-card__header' }, slots.header()) : (props.title || props.description) ? (0, vue_1.h)('header', { class: 'yk-card__header' }, [props.title ? (0, vue_1.h)('h3', { class: 'yk-card__title' }, props.title) : null, props.description ? (0, vue_1.h)('p', { class: 'yk-card__description' }, props.description) : null]) : null,
            (0, vue_1.h)('div', { class: 'yk-card__body' }, slots.default?.()), slots.footer ? (0, vue_1.h)('footer', { class: 'yk-card__footer' }, slots.footer()) : null
        ]);
    } });

},{"vue":"vue"}],
"packages/vue/src/components/alert/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAlert = void 0;
const vue_1 = require("vue");
const context_js_1 = require("../../config/context.js");
const icons_js_1 = require("../../shared/icons.js");
exports.YkAlert = (0, vue_1.defineComponent)({ name: 'YkAlert', inheritAttrs: false, props: { tone: { type: String, default: 'primary' }, title: String, dismissible: Boolean }, emits: ['dismiss'], setup(props, { slots, attrs, emit }) {
        const visible = (0, vue_1.ref)(true), t = (0, context_js_1.useMessages)();
        return () => visible.value ? (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { role: props.tone === 'danger' ? 'alert' : 'status', class: ['yk-alert', `yk-tone--${props.tone}`] }), [
            (0, vue_1.h)('span', { class: 'yk-alert__icon' }, (0, icons_js_1.icon)(props.tone === 'success' ? 'check' : 'info')),
            (0, vue_1.h)('div', { class: 'yk-alert__copy' }, [props.title ? (0, vue_1.h)('strong', {}, props.title) : null, slots.default ? (0, vue_1.h)('div', {}, slots.default()) : null]),
            props.dismissible ? (0, vue_1.h)('button', { type: 'button', class: 'yk-icon-button', 'aria-label': t.value.close, onClick: () => { visible.value = false; emit('dismiss'); } }, (0, icons_js_1.icon)('close', 16)) : null
        ]) : null;
    } });

},{"vue":"vue","../../config/context.js":"packages/vue/src/config/context.js","../../shared/icons.js":"packages/vue/src/shared/icons.js"}],
"packages/vue/src/components/avatar/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAvatar = void 0;
const vue_1 = require("vue");
exports.YkAvatar = (0, vue_1.defineComponent)({ name: 'YkAvatar', inheritAttrs: false, props: { name: { type: String, required: true }, src: String, size: { type: String, default: 'md' } }, setup(props, { attrs }) { const failed = (0, vue_1.ref)(false); (0, vue_1.watch)(() => props.src, () => { failed.value = false; }); return () => (0, vue_1.h)('span', (0, vue_1.mergeProps)(attrs, { role: 'img', 'aria-label': props.name, class: ['yk-avatar', `yk-avatar--${props.size}`] }), props.src && !failed.value ? (0, vue_1.h)('img', { src: props.src, alt: '', onError: () => { failed.value = true; } }) : Array.from(props.name.trim()).slice(0, 2).join('') || '?'); } });

},{"vue":"vue"}],
"packages/vue/src/components/separator/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkSeparator = void 0;
const vue_1 = require("vue");
exports.YkSeparator = (0, vue_1.defineComponent)({ name: 'YkSeparator', inheritAttrs: false, props: { orientation: { type: String, default: 'horizontal' }, decorative: { type: Boolean, default: true } }, setup(props, { attrs }) { return () => (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { role: props.decorative ? 'none' : 'separator', 'aria-orientation': props.decorative ? undefined : props.orientation, class: ['yk-separator', `yk-separator--${props.orientation}`] })); } });

},{"vue":"vue"}],
"packages/vue/src/components/progress/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkProgress = void 0;
const vue_1 = require("vue");
exports.YkProgress = (0, vue_1.defineComponent)({ name: 'YkProgress', inheritAttrs: false, props: { value: Number, max: { type: Number, default: 100 }, label: { type: String, required: true }, showValue: { type: Boolean, default: true } }, setup(props, { attrs }) {
        return () => {
            const max = Number.isFinite(props.max) && props.max > 0 ? props.max : 100, indeterminate = props.value === undefined, value = Math.max(0, Math.min(max, Number.isFinite(props.value) ? props.value : 0)), percent = Math.round(value / max * 100);
            return (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { class: 'yk-progress' }), [
                (0, vue_1.h)('div', { class: 'yk-progress__heading' }, [(0, vue_1.h)('span', {}, props.label), props.showValue && !indeterminate ? (0, vue_1.h)('span', {}, `${percent}%`) : null]),
                (0, vue_1.h)('div', { role: 'progressbar', 'aria-label': props.label, 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': indeterminate ? undefined : value, class: ['yk-progress__track', { 'yk-progress--indeterminate': indeterminate }] }, (0, vue_1.h)('div', { class: 'yk-progress__bar', style: indeterminate ? {} : { width: `${percent}%` } }))
            ]);
        };
    } });

},{"vue":"vue"}],
"packages/vue/src/plugin.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createYuanKit = createYuanKit;
const vue_1 = require("vue");
const context_js_1 = require("./config/context.js");
const defaults_js_1 = require("./config/defaults.js");
const theme_js_1 = require("./config/theme.js");
const components_generated_js_1 = require("./components.generated.js");
/** Opt-in global registration. Visual theme still requires ConfigProvider. */
function createYuanKit(options = {}) {
    const config = (0, theme_js_1.mergeConfig)(defaults_js_1.defaultConfig, options);
    return { install(app) { app.provide(context_js_1.CONFIG_KEY, (0, vue_1.computed)(() => config)); for (const [name, component] of Object.entries(components_generated_js_1.publicComponents))
            app.component(name, component); } };
}

},{"vue":"vue","./config/context.js":"packages/vue/src/config/context.js","./config/defaults.js":"packages/vue/src/config/defaults.js","./config/theme.js":"packages/vue/src/config/theme.js","./components.generated.js":"packages/vue/src/components.generated.js"}],
"packages/vue/src/components.generated.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicComponents = void 0;
const index_js_1 = require("./components/button/index.js");
const index_js_2 = require("./components/input/index.js");
const index_js_3 = require("./components/textarea/index.js");
const index_js_4 = require("./components/select/index.js");
const index_js_5 = require("./components/checkbox/index.js");
const index_js_6 = require("./components/switch/index.js");
const index_js_7 = require("./components/radio-group/index.js");
const index_js_8 = require("./components/dialog/index.js");
const index_js_9 = require("./components/tabs/index.js");
const index_js_10 = require("./components/tooltip/index.js");
const index_js_11 = require("./components/badge/index.js");
const index_js_12 = require("./components/card/index.js");
const index_js_13 = require("./components/alert/index.js");
const index_js_14 = require("./components/avatar/index.js");
const index_js_15 = require("./components/separator/index.js");
const index_js_16 = require("./components/progress/index.js");
const index_js_17 = require("./components/config-provider/index.js");
const index_js_18 = require("./components/slider/index.js");
const index_js_19 = require("./components/accordion/index.js");
const index_js_20 = require("./components/breadcrumb/index.js");
const index_js_21 = require("./components/pagination/index.js");
const index_js_22 = require("./components/skeleton/index.js");
const index_js_23 = require("./components/empty-state/index.js");
const index_js_24 = require("./components/spinner/index.js");
const index_js_25 = require("./components/toggle/index.js");
const index_js_26 = require("./components/button-group/index.js");
const index_js_27 = require("./components/table/index.js");
const index_js_28 = require("./components/popover/index.js");
const index_js_29 = require("./components/drawer/index.js");
const index_js_30 = require("./components/dropdown-menu/index.js");
const index_js_31 = require("./components/combobox/index.js");
const index_js_32 = require("./components/scroll-area/index.js");
const index_js_33 = require("./components/stepper/index.js");
const index_js_34 = require("./components/calendar/index.js");
const index_js_35 = require("./components/date-picker/index.js");
const index_js_36 = require("./components/file-upload/index.js");
const index_js_37 = require("./components/tree/index.js");
const index_js_38 = require("./components/carousel/index.js");
const index_js_39 = require("./components/toast/index.js");
const index_js_40 = require("./components/command/index.js");
const index_js_41 = require("./components/sidebar/index.js");
const index_js_42 = require("./components/chart/index.js");
const index_js_43 = require("./components/tags-input/index.js");
const index_js_44 = require("./ai/ai-streaming-text/index.js");
const index_js_45 = require("./ai/ai-message/index.js");
const index_js_46 = require("./ai/ai-conversation/index.js");
const index_js_47 = require("./ai/ai-model-select/index.js");
const index_js_48 = require("./ai/ai-attachments/index.js");
const index_js_49 = require("./ai/ai-prompt-input/index.js");
const index_js_50 = require("./ai/ai-tool-call/index.js");
const index_js_51 = require("./ai/ai-sources/index.js");
const index_js_52 = require("./ai/ai-activity/index.js");
const index_js_53 = require("./ai/ai-suggestions/index.js");
const index_js_54 = require("./ai/ai-artifact/index.js");
const index_js_55 = require("./ai/ai-usage/index.js");
exports.publicComponents = { YkButton: index_js_1.YkButton, YkInput: index_js_2.YkInput, YkTextarea: index_js_3.YkTextarea, YkSelect: index_js_4.YkSelect, YkCheckbox: index_js_5.YkCheckbox, YkSwitch: index_js_6.YkSwitch, YkRadioGroup: index_js_7.YkRadioGroup, YkDialog: index_js_8.YkDialog, YkTabs: index_js_9.YkTabs, YkTooltip: index_js_10.YkTooltip, YkBadge: index_js_11.YkBadge, YkCard: index_js_12.YkCard, YkAlert: index_js_13.YkAlert, YkAvatar: index_js_14.YkAvatar, YkSeparator: index_js_15.YkSeparator, YkProgress: index_js_16.YkProgress, YkConfigProvider: index_js_17.YkConfigProvider, YkSlider: index_js_18.YkSlider, YkAccordion: index_js_19.YkAccordion, YkBreadcrumb: index_js_20.YkBreadcrumb, YkPagination: index_js_21.YkPagination, YkSkeleton: index_js_22.YkSkeleton, YkEmptyState: index_js_23.YkEmptyState, YkSpinner: index_js_24.YkSpinner, YkToggle: index_js_25.YkToggle, YkButtonGroup: index_js_26.YkButtonGroup, YkTable: index_js_27.YkTable, YkPopover: index_js_28.YkPopover, YkDrawer: index_js_29.YkDrawer, YkDropdownMenu: index_js_30.YkDropdownMenu, YkCombobox: index_js_31.YkCombobox, YkScrollArea: index_js_32.YkScrollArea, YkStepper: index_js_33.YkStepper, YkCalendar: index_js_34.YkCalendar, YkDatePicker: index_js_35.YkDatePicker, YkFileUpload: index_js_36.YkFileUpload, YkTree: index_js_37.YkTree, YkCarousel: index_js_38.YkCarousel, YkToast: index_js_39.YkToast, YkCommand: index_js_40.YkCommand, YkSidebar: index_js_41.YkSidebar, YkChart: index_js_42.YkChart, YkTagsInput: index_js_43.YkTagsInput, YkAIStreamingText: index_js_44.YkAIStreamingText, YkAIMessage: index_js_45.YkAIMessage, YkAIConversation: index_js_46.YkAIConversation, YkAIModelSelect: index_js_47.YkAIModelSelect, YkAIAttachments: index_js_48.YkAIAttachments, YkAIPromptInput: index_js_49.YkAIPromptInput, YkAIToolCall: index_js_50.YkAIToolCall, YkAISources: index_js_51.YkAISources, YkAIActivity: index_js_52.YkAIActivity, YkAISuggestions: index_js_53.YkAISuggestions, YkAIArtifact: index_js_54.YkAIArtifact, YkAIUsage: index_js_55.YkAIUsage };

},{"./components/button/index.js":"packages/vue/src/components/button/index.js","./components/input/index.js":"packages/vue/src/components/input/index.js","./components/textarea/index.js":"packages/vue/src/components/textarea/index.js","./components/select/index.js":"packages/vue/src/components/select/index.js","./components/checkbox/index.js":"packages/vue/src/components/checkbox/index.js","./components/switch/index.js":"packages/vue/src/components/switch/index.js","./components/radio-group/index.js":"packages/vue/src/components/radio-group/index.js","./components/dialog/index.js":"packages/vue/src/components/dialog/index.js","./components/tabs/index.js":"packages/vue/src/components/tabs/index.js","./components/tooltip/index.js":"packages/vue/src/components/tooltip/index.js","./components/badge/index.js":"packages/vue/src/components/badge/index.js","./components/card/index.js":"packages/vue/src/components/card/index.js","./components/alert/index.js":"packages/vue/src/components/alert/index.js","./components/avatar/index.js":"packages/vue/src/components/avatar/index.js","./components/separator/index.js":"packages/vue/src/components/separator/index.js","./components/progress/index.js":"packages/vue/src/components/progress/index.js","./components/config-provider/index.js":"packages/vue/src/components/config-provider/index.js","./components/slider/index.js":"packages/vue/src/components/slider/index.js","./components/accordion/index.js":"packages/vue/src/components/accordion/index.js","./components/breadcrumb/index.js":"packages/vue/src/components/breadcrumb/index.js","./components/pagination/index.js":"packages/vue/src/components/pagination/index.js","./components/skeleton/index.js":"packages/vue/src/components/skeleton/index.js","./components/empty-state/index.js":"packages/vue/src/components/empty-state/index.js","./components/spinner/index.js":"packages/vue/src/components/spinner/index.js","./components/toggle/index.js":"packages/vue/src/components/toggle/index.js","./components/button-group/index.js":"packages/vue/src/components/button-group/index.js","./components/table/index.js":"packages/vue/src/components/table/index.js","./components/popover/index.js":"packages/vue/src/components/popover/index.js","./components/drawer/index.js":"packages/vue/src/components/drawer/index.js","./components/dropdown-menu/index.js":"packages/vue/src/components/dropdown-menu/index.js","./components/combobox/index.js":"packages/vue/src/components/combobox/index.js","./components/scroll-area/index.js":"packages/vue/src/components/scroll-area/index.js","./components/stepper/index.js":"packages/vue/src/components/stepper/index.js","./components/calendar/index.js":"packages/vue/src/components/calendar/index.js","./components/date-picker/index.js":"packages/vue/src/components/date-picker/index.js","./components/file-upload/index.js":"packages/vue/src/components/file-upload/index.js","./components/tree/index.js":"packages/vue/src/components/tree/index.js","./components/carousel/index.js":"packages/vue/src/components/carousel/index.js","./components/toast/index.js":"packages/vue/src/components/toast/index.js","./components/command/index.js":"packages/vue/src/components/command/index.js","./components/sidebar/index.js":"packages/vue/src/components/sidebar/index.js","./components/chart/index.js":"packages/vue/src/components/chart/index.js","./components/tags-input/index.js":"packages/vue/src/components/tags-input/index.js","./ai/ai-streaming-text/index.js":"packages/vue/src/ai/ai-streaming-text/index.js","./ai/ai-message/index.js":"packages/vue/src/ai/ai-message/index.js","./ai/ai-conversation/index.js":"packages/vue/src/ai/ai-conversation/index.js","./ai/ai-model-select/index.js":"packages/vue/src/ai/ai-model-select/index.js","./ai/ai-attachments/index.js":"packages/vue/src/ai/ai-attachments/index.js","./ai/ai-prompt-input/index.js":"packages/vue/src/ai/ai-prompt-input/index.js","./ai/ai-tool-call/index.js":"packages/vue/src/ai/ai-tool-call/index.js","./ai/ai-sources/index.js":"packages/vue/src/ai/ai-sources/index.js","./ai/ai-activity/index.js":"packages/vue/src/ai/ai-activity/index.js","./ai/ai-suggestions/index.js":"packages/vue/src/ai/ai-suggestions/index.js","./ai/ai-artifact/index.js":"packages/vue/src/ai/ai-artifact/index.js","./ai/ai-usage/index.js":"packages/vue/src/ai/ai-usage/index.js"}],
"packages/vue/src/components/slider/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkSlider = void 0;
const vue_1 = require("vue");
exports.YkSlider = (0, vue_1.defineComponent)({ name: 'YkSlider', inheritAttrs: false,
    props: { modelValue: Number, defaultValue: { type: Number, default: 50 }, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, step: { type: Number, default: 1 }, label: { type: String, required: true }, disabled: Boolean, name: String, unit: { type: String, default: '' } }, emits: ['update:modelValue', 'change'],
    setup(p, { attrs, emit }) {
        const id = (0, vue_1.useId)(), local = (0, vue_1.ref)(p.defaultValue);
        const bounds = (0, vue_1.computed)(() => { const min = Number.isFinite(p.min) ? p.min : 0; return { min, max: Number.isFinite(p.max) && p.max > min ? p.max : min + 1, step: Number.isFinite(p.step) && p.step > 0 ? p.step : 1 }; });
        const value = (0, vue_1.computed)(() => Math.max(bounds.value.min, Math.min(bounds.value.max, Number.isFinite(p.modelValue ?? local.value) ? p.modelValue ?? local.value : bounds.value.min)));
        const update = e => { if (p.disabled)
            return; const v = Number(e.target.value); local.value = v; emit('update:modelValue', v); };
        return () => (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { class: ['yk-slider', { 'is-disabled': p.disabled }] }), [(0, vue_1.h)('label', { for: 'yk-range-' + id }, [(0, vue_1.h)('span', {}, p.label), (0, vue_1.h)('output', { for: 'yk-range-' + id }, value.value + p.unit)]), (0, vue_1.h)('input', { id: 'yk-range-' + id, type: 'range', ...bounds.value, value: value.value, disabled: p.disabled, name: p.name, 'aria-valuetext': value.value + p.unit, onInput: update, onChange: e => { if (!p.disabled)
                    emit('change', Number(e.target.value)); } })]);
    } });

},{"vue":"vue"}],
"packages/vue/src/components/accordion/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAccordion = void 0;
const vue_1 = require("vue");
exports.YkAccordion = (0, vue_1.defineComponent)({ name: 'YkAccordion', inheritAttrs: false, props: { items: { type: Array, default: () => [] }, modelValue: Array, defaultValue: { type: Array, default: () => [] }, multiple: Boolean }, emits: ['update:modelValue'], setup(p, { attrs, slots, emit }) { const id = (0, vue_1.useId)(), local = (0, vue_1.ref)([...p.defaultValue]); const opened = (0, vue_1.computed)(() => p.modelValue ?? local.value); function toggle(item) { if (item.disabled)
        return; const next = opened.value.includes(item.value) ? opened.value.filter(v => v !== item.value) : p.multiple ? [...opened.value, item.value] : [item.value]; local.value = next; emit('update:modelValue', next); } return () => (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { class: 'yk-accordion' }), p.items.map((item, i) => { const open = opened.value.includes(item.value), base = 'yk-accordion-' + id + '-' + i; return (0, vue_1.h)('section', { class: 'yk-accordion__item', key: item.value }, [(0, vue_1.h)('h3', {}, (0, vue_1.h)('button', { id: base, type: 'button', disabled: item.disabled, 'aria-expanded': open, 'aria-controls': base + '-panel', onClick: () => toggle(item) }, [(0, vue_1.h)('span', {}, item.label), (0, vue_1.h)('span', { 'aria-hidden': 'true' }, open ? '−' : '+')])), (0, vue_1.h)('div', { id: base + '-panel', hidden: !open, 'aria-labelledby': base, class: 'yk-accordion__panel' }, slots[item.value]?.({ item }) ?? item.content)]); })); } });

},{"vue":"vue"}],
"packages/vue/src/components/breadcrumb/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkBreadcrumb = void 0;
const vue_1 = require("vue");
function safeHref(value) { return typeof value === 'string' && /^(https?:\/\/|\/(?!\/)|#|\.\.?\/)/i.test(value) ? value : undefined; }
exports.YkBreadcrumb = (0, vue_1.defineComponent)({ name: 'YkBreadcrumb', inheritAttrs: false, props: { items: { type: Array, default: () => [] }, label: { type: String, default: '面包屑' }, separator: { type: String, default: '/' } }, emits: ['navigate'], setup(p, { attrs, emit }) { return () => (0, vue_1.h)('nav', (0, vue_1.mergeProps)(attrs, { class: 'yk-breadcrumb', 'aria-label': p.label }), (0, vue_1.h)('ol', {}, p.items.map((item, i) => (0, vue_1.h)('li', { key: i }, [i ? (0, vue_1.h)('span', { class: 'yk-breadcrumb__separator', 'aria-hidden': 'true' }, p.separator) : null, i === p.items.length - 1 ? (0, vue_1.h)('span', { 'aria-current': 'page' }, item.label) : safeHref(item.href) ? (0, vue_1.h)('a', { href: safeHref(item.href), onClick: e => emit('navigate', { item, index: i, event: e }) }, item.label) : (0, vue_1.h)('button', { type: 'button', onClick: e => emit('navigate', { item, index: i, event: e }) }, item.label)])))); } });

},{"vue":"vue"}],
"packages/vue/src/components/pagination/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkPagination = void 0;
const vue_1 = require("vue");
exports.YkPagination = (0, vue_1.defineComponent)({ name: 'YkPagination', inheritAttrs: false, props: { modelValue: Number, defaultValue: { type: Number, default: 1 }, total: { type: Number, default: 100 }, pageSize: { type: Number, default: 10 }, disabled: Boolean, label: { type: String, default: '分页' } }, emits: ['update:modelValue'], setup(p, { attrs, emit }) { const local = (0, vue_1.ref)(p.defaultValue), count = (0, vue_1.computed)(() => Math.max(1, Math.ceil((Number.isFinite(p.total) ? Math.max(0, p.total) : 0) / (Number.isFinite(p.pageSize) ? Math.max(1, p.pageSize) : 10)))), current = (0, vue_1.computed)(() => Math.max(1, Math.min(count.value, Math.floor(p.modelValue ?? local.value) || 1))); function set(v) { if (p.disabled || v < 1 || v > count.value)
        return; local.value = v; emit('update:modelValue', v); } return () => { const pages = [...new Set([1, current.value - 1, current.value, current.value + 1, count.value])].filter(n => n >= 1 && n <= count.value).sort((a, b) => a - b); return (0, vue_1.h)('nav', (0, vue_1.mergeProps)(attrs, { class: 'yk-pagination', 'aria-label': p.label }), [(0, vue_1.h)('button', { type: 'button', disabled: p.disabled || current.value === 1, 'aria-label': '上一页', onClick: () => set(current.value - 1) }, '←'), ...pages.flatMap((n, i) => [i && n - pages[i - 1] > 1 ? (0, vue_1.h)('span', { 'aria-hidden': 'true' }, '…') : null, (0, vue_1.h)('button', { type: 'button', disabled: p.disabled, 'aria-label': '第 ' + n + ' 页', 'aria-current': current.value === n ? 'page' : undefined, onClick: () => set(n) }, String(n))]), (0, vue_1.h)('button', { type: 'button', disabled: p.disabled || current.value === count.value, 'aria-label': '下一页', onClick: () => set(current.value + 1) }, '→')]); }; } });

},{"vue":"vue"}],
"packages/vue/src/components/skeleton/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkSkeleton = void 0;
const vue_1 = require("vue");
exports.YkSkeleton = (0, vue_1.defineComponent)({ name: 'YkSkeleton', inheritAttrs: false, props: { lines: { type: Number, default: 3 }, avatar: Boolean, animated: { type: Boolean, default: true }, label: { type: String, default: '内容加载中' } }, setup(p, { attrs }) { return () => (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { class: ['yk-skeleton', { 'yk-skeleton--animated': p.animated }], role: 'status', 'aria-label': p.label, 'aria-busy': 'true' }), [p.avatar ? (0, vue_1.h)('span', { class: 'yk-skeleton__avatar', 'aria-hidden': 'true' }) : null, (0, vue_1.h)('div', { class: 'yk-skeleton__lines', 'aria-hidden': 'true' }, Array.from({ length: Math.max(1, Math.min(12, Math.floor(p.lines) || 1)) }, (_, i) => (0, vue_1.h)('span', { key: i, style: { width: i === Math.max(1, Math.min(12, Math.floor(p.lines) || 1)) - 1 ? '65%' : '100%' } })))]); } });

},{"vue":"vue"}],
"packages/vue/src/components/empty-state/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkEmptyState = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../button/index.js");
exports.YkEmptyState = (0, vue_1.defineComponent)({ name: 'YkEmptyState', inheritAttrs: false, props: { title: { type: String, default: '这里还没有内容' }, description: { type: String, default: '创建第一个项目，开始积累你的设计资产。' }, actionLabel: { type: String, default: '新建项目' } }, emits: ['action'], setup(p, { attrs, slots, emit }) { return () => (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: 'yk-empty-state' }), [slots.illustration?.() ?? (0, vue_1.h)('div', { class: 'yk-empty-state__mark', 'aria-hidden': 'true' }, '◇'), (0, vue_1.h)('h3', {}, p.title), (0, vue_1.h)('p', {}, p.description), slots.actions?.() ?? (p.actionLabel ? (0, vue_1.h)(index_js_1.YkButton, { onClick: () => emit('action') }, () => p.actionLabel) : null)]); } });

},{"vue":"vue","../button/index.js":"packages/vue/src/components/button/index.js"}],
"packages/vue/src/components/spinner/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkSpinner = void 0;
const vue_1 = require("vue");
exports.YkSpinner = (0, vue_1.defineComponent)({ name: 'YkSpinner', inheritAttrs: false, props: { label: { type: String, default: '加载中' }, size: { type: String, default: 'md' } }, setup(p, { attrs }) { return () => (0, vue_1.h)('span', (0, vue_1.mergeProps)(attrs, { class: ['yk-spinner', 'yk-spinner--' + p.size], role: 'status', 'aria-label': p.label }), [(0, vue_1.h)('span', { class: 'yk-spinner__ring', 'aria-hidden': 'true' }), (0, vue_1.h)('span', { class: 'yk-sr-only' }, p.label)]); } });

},{"vue":"vue"}],
"packages/vue/src/components/toggle/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkToggle = void 0;
const vue_1 = require("vue");
exports.YkToggle = (0, vue_1.defineComponent)({ name: 'YkToggle', inheritAttrs: false, props: { pressed: { type: Boolean, default: false }, disabled: Boolean }, emits: ['update:pressed', 'change'], setup(p, { attrs, slots, emit }) { return () => (0, vue_1.h)('button', (0, vue_1.mergeProps)(attrs, { type: 'button', class: ['yk-toggle', { 'is-pressed': p.pressed }], disabled: p.disabled, 'aria-pressed': String(p.pressed), onClick: () => { const v = !p.pressed; emit('update:pressed', v); emit('change', v); } }), slots.default?.() ?? '切换'); } });

},{"vue":"vue"}],
"packages/vue/src/components/button-group/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkButtonGroup = void 0;
const vue_1 = require("vue");
exports.YkButtonGroup = (0, vue_1.defineComponent)({ name: 'YkButtonGroup', inheritAttrs: false, props: { attached: { type: Boolean, default: true } }, setup(p, { attrs, slots }) { return () => (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { class: ['yk-button-group', { 'is-attached': p.attached }], role: 'group' }), slots.default?.()); } });

},{"vue":"vue"}],
"packages/vue/src/components/table/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkTable = void 0;
const vue_1 = require("vue");
exports.YkTable = (0, vue_1.defineComponent)({ name: 'YkTable', inheritAttrs: false, props: { columns: { type: Array, default: () => [] }, rows: { type: Array, default: () => [] }, caption: { type: String, default: '' }, striped: Boolean }, setup(p, { attrs }) { return () => (0, vue_1.h)('div', { class: 'yk-table-wrap' }, (0, vue_1.h)('table', (0, vue_1.mergeProps)(attrs, { class: ['yk-table', { 'is-striped': p.striped }] }), [p.caption ? (0, vue_1.h)('caption', {}, p.caption) : null, (0, vue_1.h)('thead', {}, (0, vue_1.h)('tr', {}, p.columns.map(c => (0, vue_1.h)('th', { scope: 'col' }, c.label)))), (0, vue_1.h)('tbody', {}, p.rows.map((r, i) => (0, vue_1.h)('tr', { key: r.id ?? i }, p.columns.map(c => (0, vue_1.h)('td', {}, String(r[c.key] ?? ''))))))])); } });

},{"vue":"vue"}],
"packages/vue/src/components/popover/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkPopover = void 0;
const vue_1 = require("vue");
exports.YkPopover = (0, vue_1.defineComponent)({ name: 'YkPopover', props: { open: { type: Boolean, default: undefined }, placement: { type: String, default: 'bottom' }, label: { type: String, default: '补充信息' } }, emits: ['update:open'], setup(p, { slots, emit }) {
        const inner = (0, vue_1.ref)(false), root = (0, vue_1.ref)(null), panel = (0, vue_1.ref)(null), id = (0, vue_1.useId)();
        let opener = null, restore = false, disposed = false;
        const isOpen = () => p.open === undefined ? inner.value : p.open;
        const set = (v, returnFocus = false) => { restore = returnFocus; inner.value = v; emit('update:open', v); };
        const onDoc = e => { if (isOpen() && !root.value?.contains(e.target))
            set(false); };
        (0, vue_1.watch)(isOpen, async (value) => { if (value)
            opener = document.activeElement; await (0, vue_1.nextTick)(); if (disposed)
            return; if (value) {
            const focusable = panel.value?.querySelector('button:not(:disabled),input:not(:disabled),a[href],[tabindex="0"]');
            (focusable || panel.value)?.focus();
        }
        else if (restore && opener?.isConnected)
            opener.focus(); });
        (0, vue_1.onMounted)(() => document.addEventListener('pointerdown', onDoc));
        (0, vue_1.onBeforeUnmount)(() => { disposed = true; if (typeof document !== 'undefined')
            document.removeEventListener('pointerdown', onDoc); });
        return () => (0, vue_1.h)('div', { class: 'yk-popover', ref: root, onKeydown: e => { if (e.key === 'Escape' && isOpen()) {
                e.preventDefault();
                e.stopPropagation();
                set(false, true);
            } } }, [
            slots.trigger?.({ open: isOpen(), toggle: () => set(!isOpen(), isOpen()), attrs: { 'aria-expanded': isOpen(), 'aria-controls': id, 'aria-haspopup': 'dialog' } }),
            isOpen() ? (0, vue_1.h)('div', { id, ref: panel, class: ['yk-popover__panel', 'is-' + p.placement], role: 'dialog', 'aria-label': p.label, tabindex: -1 }, slots.default?.()) : null
        ]);
    } });

},{"vue":"vue"}],
"packages/vue/src/components/drawer/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkDrawer = void 0;
const vue_1 = require("vue");
exports.YkDrawer = (0, vue_1.defineComponent)({ name: 'YkDrawer', props: { open: Boolean, title: { type: String, default: '抽屉' }, side: { type: String, default: 'right' } }, emits: ['update:open', 'close'], setup(p, { slots, emit }) { const close = () => { emit('update:open', false); emit('close'); }; const key = e => { if (e.key === 'Escape' && p.open)
        close(); }; if (typeof document !== 'undefined')
        document.addEventListener('keydown', key); (0, vue_1.watch)(() => p.open, v => { if (typeof document !== 'undefined')
        document.body.style.overflow = v ? 'hidden' : ''; }, { immediate: true }); (0, vue_1.onBeforeUnmount)(() => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; }); return () => p.open ? (0, vue_1.h)(vue_1.Teleport, { to: 'body' }, (0, vue_1.h)('div', { class: 'yk-drawer-layer' }, [(0, vue_1.h)('button', { class: 'yk-drawer__backdrop', 'aria-label': '关闭抽屉', onClick: close }), (0, vue_1.h)('aside', { class: ['yk-drawer', 'is-' + p.side], role: 'dialog', 'aria-modal': 'true', 'aria-label': p.title }, [(0, vue_1.h)('header', {}, [(0, vue_1.h)('strong', {}, p.title), (0, vue_1.h)('button', { type: 'button', 'aria-label': '关闭', onClick: close }, '×')]), (0, vue_1.h)('div', { class: 'yk-drawer__body' }, slots.default?.()), slots.footer ? (0, vue_1.h)('footer', {}, slots.footer()) : null])])) : null; } });

},{"vue":"vue"}],
"packages/vue/src/components/dropdown-menu/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkDropdownMenu = void 0;
const vue_1 = require("vue");
exports.YkDropdownMenu = (0, vue_1.defineComponent)({ name: 'YkDropdownMenu', props: { items: { type: Array, default: () => [] } }, emits: ['select'], setup(p, { slots, emit }) { const open = (0, vue_1.ref)(false); const onDoc = e => { if (!e.target.closest?.('.yk-dropdown'))
        open.value = false; }; if (typeof document !== 'undefined')
        document.addEventListener('pointerdown', onDoc); (0, vue_1.onBeforeUnmount)(() => document.removeEventListener('pointerdown', onDoc)); return () => (0, vue_1.h)('span', { class: 'yk-dropdown' }, [slots.trigger?.({ open: open.value, toggle: () => open.value = !open.value }), open.value ? (0, vue_1.h)('div', { class: 'yk-dropdown__menu', role: 'menu' }, p.items.map(i => (0, vue_1.h)('button', { type: 'button', role: 'menuitem', disabled: i.disabled, onClick: () => { emit('select', i); open.value = false; } }, i.label))) : null]); } });

},{"vue":"vue"}],
"packages/vue/src/components/combobox/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkCombobox = void 0;
const vue_1 = require("vue");
exports.YkCombobox = (0, vue_1.defineComponent)({ name: 'YkCombobox', props: { modelValue: { type: String, default: '' }, options: { type: Array, default: () => [] }, label: { type: String, default: '选择项目' }, placeholder: { type: String, default: '搜索...' }, disabled: Boolean }, emits: ['update:modelValue'], setup(p, { emit }) {
        const q = (0, vue_1.ref)(''), open = (0, vue_1.ref)(false), active = (0, vue_1.ref)(-1), input = (0, vue_1.ref)(null), root = (0, vue_1.ref)(null), id = (0, vue_1.useId)();
        const filtered = (0, vue_1.computed)(() => p.options.filter(o => o.label.toLowerCase().includes(q.value.toLowerCase()))), enabled = (0, vue_1.computed)(() => filtered.value.filter(o => !o.disabled));
        const selectedLabel = () => p.options.find(o => o.value === p.modelValue)?.label || '';
        function close() { open.value = false; q.value = ''; active.value = -1; }
        function show() { if (p.disabled)
            return; open.value = true; active.value = 0; }
        (0, vue_1.watch)(() => [p.modelValue, p.disabled], () => { if (p.disabled)
            close(); });
        (0, vue_1.watch)(q, () => active.value = 0);
        async function select(option) { if (!option || option.disabled || p.disabled)
            return; emit('update:modelValue', option.value); close(); await (0, vue_1.nextTick)(); input.value?.focus(); open.value = false; }
        async function key(e) {
            if (p.disabled || e.isComposing || e.keyCode === 229)
                return;
            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                close();
                return;
            }
            if (e.key === 'Tab') {
                close();
                return;
            }
            if (e.key === 'Enter' && open.value) {
                e.preventDefault();
                select(enabled.value[active.value]);
                return;
            }
            if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
                e.preventDefault();
                if (!open.value) {
                    show();
                    active.value = e.key === 'ArrowUp' ? enabled.value.length - 1 : 0;
                }
                else if (e.key === 'ArrowDown')
                    active.value = Math.min(active.value + 1, enabled.value.length - 1);
                else if (e.key === 'ArrowUp')
                    active.value = Math.max(active.value - 1, 0);
                else if (e.key === 'Home')
                    active.value = 0;
                else
                    active.value = enabled.value.length - 1;
                await (0, vue_1.nextTick)();
                root.value?.querySelector('[data-active=true]')?.scrollIntoView({ block: 'nearest' });
            }
        }
        return () => (0, vue_1.h)('div', { class: 'yk-combobox', ref: root, onFocusout: e => { if (!root.value?.contains(e.relatedTarget))
                close(); } }, [
            (0, vue_1.h)('label', { for: id, class: 'yk-combobox__label' }, p.label),
            (0, vue_1.h)('input', { id, ref: input, value: open.value ? q.value : selectedLabel(), placeholder: p.placeholder, disabled: p.disabled, role: 'combobox', autocomplete: 'off', 'aria-autocomplete': 'list', 'aria-expanded': open.value, 'aria-controls': id + '-list', 'aria-activedescendant': open.value && enabled.value[active.value] ? id + '-opt-' + filtered.value.indexOf(enabled.value[active.value]) : undefined, onInput: e => { q.value = e.target.value; show(); }, onClick: show, onKeydown: key }),
            open.value ? (0, vue_1.h)('div', { id: id + '-list', class: 'yk-combobox__list', role: 'listbox', 'aria-label': p.label }, filtered.value.length ? filtered.value.map((o, i) => (0, vue_1.h)('div', { id: id + '-opt-' + i, key: o.value, role: 'option', 'aria-selected': p.modelValue === o.value, 'aria-disabled': o.disabled || undefined, 'data-active': enabled.value[active.value] === o, onMousedown: e => e.preventDefault(), onPointermove: () => { if (!o.disabled)
                    active.value = enabled.value.indexOf(o); }, onClick: () => select(o) }, o.label)) : (0, vue_1.h)('span', { class: 'yk-combobox__empty', role: 'status' }, '没有匹配项')) : null
        ]);
    } });

},{"vue":"vue"}],
"packages/vue/src/components/scroll-area/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkScrollArea = void 0;
const vue_1 = require("vue");
exports.YkScrollArea = (0, vue_1.defineComponent)({ name: 'YkScrollArea', inheritAttrs: false, props: { height: { type: Number, default: 220 } }, setup(p, { attrs, slots }) { return () => (0, vue_1.h)('div', (0, vue_1.mergeProps)(attrs, { class: 'yk-scroll-area', style: { maxHeight: p.height + 'px' } }), slots.default?.()); } });

},{"vue":"vue"}],
"packages/vue/src/components/stepper/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkStepper = void 0;
const vue_1 = require("vue");
exports.YkStepper = (0, vue_1.defineComponent)({ name: 'YkStepper', inheritAttrs: false, props: { items: { type: Array, default: () => [] }, current: { type: Number, default: 1 } }, setup(p, { attrs }) { return () => (0, vue_1.h)('ol', (0, vue_1.mergeProps)(attrs, { class: 'yk-stepper', 'aria-label': '步骤' }), p.items.map((i, idx) => (0, vue_1.h)('li', { class: { 'is-active': idx + 1 === p.current, 'is-done': idx + 1 < p.current } }, [(0, vue_1.h)('span', { class: 'yk-stepper__dot' }, idx + 1), (0, vue_1.h)('span', {}, i.label)]))); } });

},{"vue":"vue"}],
"packages/vue/src/components/calendar/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkCalendar = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
const dates_js_1 = require("../../shared/dates.js");
exports.YkCalendar = (0, vue_1.defineComponent)({ name: 'YkCalendar', props: { modelValue: { type: String, default: undefined }, defaultValue: String, min: String, max: String, disabled: Boolean, weekStartsOn: { type: Number, default: 1 }, label: { type: String, default: '选择日期' } }, emits: ['update:modelValue'], setup(p, { emit }) {
        const model = (0, control_js_1.useControllable)(p, emit), root = (0, vue_1.ref)(null);
        const initial = () => (0, dates_js_1.parseDate)(model.value.value) ? model.value.value : (0, dates_js_1.dateAllowed)((0, dates_js_1.todayISO)(), p.min, p.max) ? (0, dates_js_1.todayISO)() : (0, dates_js_1.parseDate)(p.min) ? p.min : (0, dates_js_1.parseDate)(p.max) ? p.max : (0, dates_js_1.todayISO)();
        const focused = (0, vue_1.ref)(initial()), month = (0, vue_1.ref)(focused.value);
        const allowed = d => !p.disabled && (0, dates_js_1.dateAllowed)(d, p.min, p.max);
        (0, vue_1.watch)(() => [model.value.value, p.min, p.max], () => { focused.value = initial(); month.value = focused.value; });
        const grid = (0, vue_1.computed)(() => (0, dates_js_1.monthGrid)(month.value, p.weekStartsOn === 0 ? 0 : 1));
        const title = (0, vue_1.computed)(() => new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', timeZone: 'UTC' }).format((0, dates_js_1.parseDate)(month.value)));
        async function focusDate(d) { if (!allowed(d))
            return; focused.value = d; month.value = d; await (0, vue_1.nextTick)(); root.value?.querySelector(`[data-date="${d}"]`)?.focus(); }
        function key(e, d) {
            let target;
            if (e.key === 'ArrowRight')
                target = (0, dates_js_1.shiftDate)(d, 1);
            if (e.key === 'ArrowLeft')
                target = (0, dates_js_1.shiftDate)(d, -1);
            if (e.key === 'ArrowDown')
                target = (0, dates_js_1.shiftDate)(d, 7);
            if (e.key === 'ArrowUp')
                target = (0, dates_js_1.shiftDate)(d, -7);
            const weekday = ((0, dates_js_1.parseDate)(d).getUTCDay() - (p.weekStartsOn === 0 ? 0 : 1) + 7) % 7;
            if (e.key === 'Home')
                target = (0, dates_js_1.shiftDate)(d, -weekday);
            if (e.key === 'End')
                target = (0, dates_js_1.shiftDate)(d, 6 - weekday);
            if (e.key === 'PageUp')
                target = (0, dates_js_1.shiftDate)(d, 0, e.shiftKey ? -12 : -1);
            if (e.key === 'PageDown')
                target = (0, dates_js_1.shiftDate)(d, 0, e.shiftKey ? 12 : 1);
            if (target) {
                e.preventDefault();
                if (p.min && target < p.min)
                    target = p.min;
                if (p.max && target > p.max)
                    target = p.max;
                focusDate(target);
            }
        }
        const canMove = n => { const d = (0, dates_js_1.shiftDate)(month.value, 0, n); return !p.disabled && (0, dates_js_1.parseDate)(d) && (!p.min || d.slice(0, 7) >= p.min.slice(0, 7)) && (!p.max || d.slice(0, 7) <= p.max.slice(0, 7)); };
        function move(n) { let d = (0, dates_js_1.shiftDate)(month.value, 0, n); if (p.min && d < p.min)
            d = p.min; if (p.max && d > p.max)
            d = p.max; month.value = d; focused.value = d; }
        return () => (0, vue_1.h)('section', { class: 'yk-calendar', ref: root, 'aria-label': p.label }, [
            (0, vue_1.h)('div', { class: 'yk-calendar__header' }, [(0, vue_1.h)('button', { type: 'button', disabled: !canMove(-1), 'aria-label': '上个月', onClick: () => move(-1) }, '‹'), (0, vue_1.h)('strong', { 'aria-live': 'polite' }, title.value), (0, vue_1.h)('button', { type: 'button', disabled: !canMove(1), 'aria-label': '下个月', onClick: () => move(1) }, '›')]),
            (0, vue_1.h)('table', { role: 'grid', 'aria-label': title.value }, [(0, vue_1.h)('thead', {}, (0, vue_1.h)('tr', {}, (p.weekStartsOn === 0 ? ['日', '一', '二', '三', '四', '五', '六'] : ['一', '二', '三', '四', '五', '六', '日']).map(x => (0, vue_1.h)('th', { scope: 'col' }, x)))), (0, vue_1.h)('tbody', {}, Array.from({ length: 6 }, (_, row) => (0, vue_1.h)('tr', {}, grid.value.slice(row * 7, row * 7 + 7).map(d => (0, vue_1.h)('td', { 'aria-selected': model.value.value === d.date }, (0, vue_1.h)('button', { type: 'button', tabindex: focused.value === d.date ? 0 : -1, 'data-date': d.date, 'aria-label': d.date, 'aria-current': d.date === (0, dates_js_1.todayISO)() ? 'date' : undefined, disabled: !allowed(d.date), class: { 'is-outside': d.outside, 'is-selected': model.value.value === d.date }, onKeydown: e => key(e, d.date), onFocus: () => focused.value = d.date, onClick: () => { model.set(d.date); month.value = d.date; focused.value = d.date; } }, d.day))))))]),
            (0, vue_1.h)('p', { class: 'yk-calendar__hint' }, model.value.value || '方向键切换日期 · Enter 选择')
        ]);
    } });

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js","../../shared/dates.js":"packages/vue/src/shared/dates.js"}],
"packages/vue/src/shared/dates.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isoDate = void 0;
exports.parseDate = parseDate;
exports.todayISO = todayISO;
exports.shiftDate = shiftDate;
exports.dateAllowed = dateAllowed;
exports.monthGrid = monthGrid;
function parseDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value))
        return null;
    const [y, m, d] = value.split('-').map(Number);
    if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31)
        return null;
    const date = new Date(Date.UTC(y, m - 1, d));
    return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d ? date : null;
}
const isoDate = date => date.toISOString().slice(0, 10);
exports.isoDate = isoDate;
function todayISO() { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`; }
function shiftDate(value, days = 0, months = 0) {
    const d = parseDate(value);
    if (!d)
        return null;
    if (months) {
        const target = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + months, 1));
        const last = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
        d.setUTCFullYear(target.getUTCFullYear(), target.getUTCMonth(), Math.min(d.getUTCDate(), last));
    }
    d.setUTCDate(d.getUTCDate() + days);
    return (0, exports.isoDate)(d);
}
function dateAllowed(value, min, max) { return !!parseDate(value) && (!min || value >= min) && (!max || value <= max); }
function monthGrid(value, weekStartsOn = 1) {
    const d = parseDate(value);
    if (!d)
        return [];
    const first = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1));
    const offset = (first.getUTCDay() - weekStartsOn + 7) % 7;
    first.setUTCDate(first.getUTCDate() - offset);
    return Array.from({ length: 42 }, (_, i) => { const date = new Date(first); date.setUTCDate(date.getUTCDate() + i); return { date: (0, exports.isoDate)(date), day: date.getUTCDate(), outside: date.getUTCMonth() !== d.getUTCMonth() }; });
}

},{}],
"packages/vue/src/components/date-picker/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkDatePicker = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
exports.YkDatePicker = (0, vue_1.defineComponent)({ name: 'YkDatePicker', props: { modelValue: { type: String, default: undefined }, defaultValue: String, label: { type: String, default: '日期' }, min: String, max: String, disabled: Boolean, required: Boolean, name: String }, emits: ['update:modelValue'], setup(p, { emit }) { const id = (0, vue_1.useId)(), model = (0, control_js_1.useControllable)(p, emit); return () => (0, vue_1.h)('div', { class: 'yk-field' }, [(0, vue_1.h)('label', { for: id, class: 'yk-field__label' }, p.label), (0, vue_1.h)('input', { id, class: 'yk-date-picker', type: 'date', value: model.value.value, min: p.min, max: p.max, disabled: p.disabled, required: p.required, name: p.name, onInput: e => model.set(e.target.value) })]); } });

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/components/file-upload/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkFileUpload = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
const safety_js_1 = require("../../shared/safety.js");
exports.YkFileUpload = (0, vue_1.defineComponent)({ name: 'YkFileUpload', props: { modelValue: { type: Array, default: undefined }, defaultValue: { type: Array, default: () => [] }, label: { type: String, default: '添加文件' }, accept: { type: String, default: '' }, maxSize: { type: Number, default: 10485760 }, maxFiles: { type: Number, default: 5 }, disabled: Boolean }, emits: ['update:modelValue', 'reject'], setup(p, { emit }) {
        const id = (0, vue_1.useId)(), input = (0, vue_1.ref)(null), drag = (0, vue_1.ref)(false), errors = (0, vue_1.ref)([]), model = (0, control_js_1.useControllable)(p, emit, 'modelValue', []);
        function add(files) { if (p.disabled)
            return; const result = (0, safety_js_1.validateFiles)(Array.from(files || []), { accept: p.accept, maxSize: p.maxSize, maxFiles: p.maxFiles, existing: model.value.value }); errors.value = result.rejected.map(x => `${x.file.name}：${x.reason}`); if (result.accepted.length)
            model.set([...model.value.value, ...result.accepted]); if (result.rejected.length)
            emit('reject', result.rejected); }
        return () => (0, vue_1.h)('section', { class: 'yk-upload', 'aria-label': p.label }, [
            (0, vue_1.h)('input', { ref: input, id, type: 'file', accept: p.accept, multiple: p.maxFiles > 1, disabled: p.disabled, class: 'yk-sr-only', tabindex: -1, onChange: e => { add(e.target.files); e.target.value = ''; } }),
            (0, vue_1.h)('button', { type: 'button', class: ['yk-upload__drop', { 'is-drag': drag.value }], disabled: p.disabled, onClick: () => input.value?.click(), onDragover: e => { e.preventDefault(); if (!p.disabled)
                    drag.value = true; }, onDragleave: () => drag.value = false, onDrop: e => { e.preventDefault(); drag.value = false; add(e.dataTransfer.files); } }, [(0, vue_1.h)('span', { class: 'yk-upload__icon', 'aria-hidden': 'true' }, '↑'), (0, vue_1.h)('strong', {}, p.label), (0, vue_1.h)('span', {}, `点击选择或拖入 · 每个 ≤ ${(0, safety_js_1.formatBytes)(p.maxSize)} · 最多 ${p.maxFiles} 个`)]),
            (0, vue_1.h)('ul', { class: 'yk-upload__files' }, model.value.value.map((file, i) => (0, vue_1.h)('li', { key: file.name + '-' + i }, [(0, vue_1.h)('span', {}, file.name), (0, vue_1.h)('small', {}, (0, safety_js_1.formatBytes)(file.size)), (0, vue_1.h)('button', { type: 'button', disabled: p.disabled, 'aria-label': '移除 ' + file.name, onClick: () => model.set(model.value.value.filter((_, j) => j !== i)) }, '×')]))),
            errors.value.length ? (0, vue_1.h)('div', { role: 'alert', class: 'yk-upload__error' }, errors.value.join('；')) : null,
            (0, vue_1.h)('small', { class: 'yk-upload__note' }, '仅在本地选择；不会自动上传文件。')
        ]);
    } });

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js","../../shared/safety.js":"packages/vue/src/shared/safety.js"}],
"packages/vue/src/shared/safety.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeWebUrl = safeWebUrl;
exports.safeText = safeText;
exports.formatBytes = formatBytes;
exports.validateFiles = validateFiles;
exports.safeFilename = safeFilename;
/** Only public web links. Never turn model-provided data/javascript URLs into links. */
function safeWebUrl(value) {
    if (typeof value !== 'string' || !/^https?:\/\//i.test(value.trim()))
        return null;
    try {
        const url = new URL(value);
        return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url.href : null;
    }
    catch {
        return null;
    }
}
function safeText(value) { return typeof value === 'string' ? value : value == null ? '' : String(value); }
function formatBytes(n) { return n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : n >= 1024 ? (n / 1024).toFixed(1) + ' KB' : n + ' B'; }
function validateFiles(files, { accept = '', maxSize = 10485760, maxFiles = 5, existing = [] } = {}) {
    const accepted = [], rejected = [], rules = accept.split(',').map(x => x.trim().toLowerCase()).filter(Boolean);
    for (const file of files) {
        let reason = '';
        if (existing.length + accepted.length >= maxFiles)
            reason = `最多 ${maxFiles} 个文件`;
        else if (file.size > maxSize)
            reason = '文件超出大小限制';
        else if (rules.length && !rules.some(rule => rule.startsWith('.') ? file.name.toLowerCase().endsWith(rule) : rule.endsWith('/*') ? file.type.toLowerCase().startsWith(rule.slice(0, -1)) : file.type.toLowerCase() === rule))
            reason = '不支持的文件类型';
        else if ([...existing, ...accepted].some(x => x.name === file.name && x.size === file.size && x.lastModified === file.lastModified))
            reason = '重复文件';
        if (reason)
            rejected.push({ file, reason });
        else
            accepted.push(file);
    }
    return { accepted, rejected };
}
function safeFilename(value, extension = '.txt') {
    const name = String(value || 'artifact').replace(/[<>:"/\\|?*\x00-\x1f]/g, '_').replace(/^\.+/, '').slice(0, 80);
    return (name || 'artifact') + extension;
}

},{}],
"packages/vue/src/components/tree/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkTree = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
exports.YkTree = (0, vue_1.defineComponent)({ name: 'YkTree', props: { items: { type: Array, default: () => [] }, modelValue: { type: String, default: undefined }, defaultValue: String, label: { type: String, default: '资源目录' }, disabled: Boolean }, emits: ['update:modelValue'], setup(p, { emit }) {
        const model = (0, control_js_1.useControllable)(p, emit), expanded = (0, vue_1.ref)(new Set()), focusId = (0, vue_1.ref)(''), root = (0, vue_1.ref)(null);
        const visible = (0, vue_1.computed)(() => { const result = []; function visit(nodes, level = 1, parent = null) { nodes.forEach((n, i) => { result.push({ ...n, level, parent, pos: i + 1, setsize: nodes.length }); if (expanded.value.has(n.value))
            visit(n.children || [], level + 1, n.value); }); } visit(p.items); return result; });
        const enabled = (0, vue_1.computed)(() => visible.value.filter(n => !n.disabled && !p.disabled));
        const focused = (0, vue_1.computed)(() => enabled.value.some(n => n.value === focusId.value) ? focusId.value : enabled.value[0]?.value);
        const toggle = n => { const next = new Set(expanded.value); next.has(n.value) ? next.delete(n.value) : next.add(n.value); expanded.value = next; };
        async function focus(n) { if (!n)
            return; focusId.value = n.value; await (0, vue_1.nextTick)(); [...root.value.querySelectorAll('[role=treeitem]')].find(e => e.dataset.value === n.value)?.focus(); }
        function key(e, n) {
            const index = enabled.value.findIndex(x => x.value === n.value);
            if (['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End', 'Enter', ' '].includes(e.key))
                e.preventDefault();
            if (e.key === 'ArrowDown')
                focus(enabled.value[Math.min(index + 1, enabled.value.length - 1)]);
            if (e.key === 'ArrowUp')
                focus(enabled.value[Math.max(index - 1, 0)]);
            if (e.key === 'Home')
                focus(enabled.value[0]);
            if (e.key === 'End')
                focus(enabled.value.at(-1));
            if (e.key === 'ArrowRight' && n.children?.length) {
                if (!expanded.value.has(n.value))
                    toggle(n);
                else
                    focus(enabled.value[index + 1]);
            }
            if (e.key === 'ArrowLeft') {
                if (expanded.value.has(n.value))
                    toggle(n);
                else
                    focus(enabled.value.find(x => x.value === n.parent));
            }
            if (e.key === 'Enter' || e.key === ' ')
                model.set(n.value);
        }
        return () => (0, vue_1.h)('div', { class: 'yk-tree', role: 'tree', 'aria-label': p.label, ref: root }, visible.value.map(n => (0, vue_1.h)('div', { role: 'treeitem', key: n.value, 'data-value': n.value, 'aria-level': n.level, 'aria-posinset': n.pos, 'aria-setsize': n.setsize, 'aria-selected': model.value.value === n.value, 'aria-expanded': n.children?.length ? expanded.value.has(n.value) : undefined, 'aria-disabled': n.disabled || p.disabled || undefined, tabindex: !p.disabled && !n.disabled && focused.value === n.value ? 0 : -1, class: 'yk-tree__item', style: { paddingInlineStart: (n.level - 1) * 20 + 10 + 'px' }, onFocus: () => focusId.value = n.value, onKeydown: e => { if (!n.disabled && !p.disabled)
                key(e, n); }, onClick: () => { if (!n.disabled && !p.disabled) {
                model.set(n.value);
                if (n.children?.length)
                    toggle(n);
            } } }, [(0, vue_1.h)('span', { 'aria-hidden': 'true', class: 'yk-tree__chevron' }, n.children?.length ? (expanded.value.has(n.value) ? '⌄' : '›') : '·'), n.label])));
    } });

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/components/carousel/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkCarousel = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
exports.YkCarousel = (0, vue_1.defineComponent)({ name: 'YkCarousel', props: { items: { type: Array, default: () => [] }, modelValue: { type: Number, default: undefined }, defaultValue: { type: Number, default: 0 }, label: { type: String, default: '内容轮播' }, loop: Boolean }, emits: ['update:modelValue'], setup(p, { slots, emit }) {
        const model = (0, control_js_1.useControllable)(p, emit, 'modelValue', 0), id = (0, vue_1.useId)(), index = (0, vue_1.computed)(() => Math.max(0, Math.min(Number.isFinite(model.value.value) ? model.value.value : 0, p.items.length - 1)));
        function move(delta) { if (!p.items.length)
            return; const next = p.loop ? (index.value + delta + p.items.length) % p.items.length : Math.max(0, Math.min(index.value + delta, p.items.length - 1)); model.set(next); }
        return () => (0, vue_1.h)('section', { class: 'yk-carousel', role: 'region', 'aria-roledescription': '轮播', 'aria-label': p.label }, [
            (0, vue_1.h)('div', { class: 'yk-carousel__slide', id, role: 'group', 'aria-roledescription': '幻灯片', 'aria-label': `${index.value + 1} / ${p.items.length}`, 'aria-live': 'polite' }, p.items.length ? (slots.slide?.({ item: p.items[index.value], index: index.value }) || [(0, vue_1.h)('span', { class: 'yk-carousel__number' }, String(index.value + 1).padStart(2, '0')), (0, vue_1.h)('h3', {}, p.items[index.value].label), (0, vue_1.h)('p', {}, p.items[index.value].content)]) : '暂无内容'),
            (0, vue_1.h)('div', { class: 'yk-carousel__controls' }, [(0, vue_1.h)('button', { type: 'button', 'aria-label': '上一张', 'aria-controls': id, disabled: !p.items.length || (!p.loop && index.value === 0), onClick: () => move(-1) }, '←'), (0, vue_1.h)('span', {}, `${p.items.length ? index.value + 1 : 0} / ${p.items.length}`), (0, vue_1.h)('button', { type: 'button', 'aria-label': '下一张', 'aria-controls': id, disabled: !p.items.length || (!p.loop && index.value === p.items.length - 1), onClick: () => move(1) }, '→')])
        ]);
    } });

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/components/toast/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkToast = void 0;
const vue_1 = require("vue");
exports.YkToast = (0, vue_1.defineComponent)({ name: 'YkToast', props: { open: { type: Boolean, default: true }, title: { type: String, default: '已保存' }, description: String, duration: { type: Number, default: 5000 }, tone: { type: String, default: 'success' } }, emits: ['update:open'], setup(p, { emit }) {
        let timer, started = 0, remaining = p.duration, hovered = false, focused = false;
        const stop = () => { clearTimeout(timer); timer = undefined; };
        const close = () => { stop(); emit('update:open', false); };
        const resume = () => { stop(); if (p.open && p.duration > 0 && !hovered && !focused) {
            started = Date.now();
            timer = setTimeout(close, Math.max(0, remaining));
        } };
        const pause = () => { if (timer) {
            remaining = Math.max(0, remaining - (Date.now() - started));
            stop();
        } };
        (0, vue_1.watch)(() => [p.open, p.duration], () => { stop(); remaining = p.duration; resume(); }, { immediate: true });
        (0, vue_1.onBeforeUnmount)(stop);
        return () => p.open ? (0, vue_1.h)('section', { class: ['yk-toast', 'yk-tone--' + p.tone], role: p.tone === 'danger' ? 'alert' : 'status', 'aria-atomic': 'true', onPointerenter: () => { hovered = true; pause(); }, onPointerleave: () => { hovered = false; resume(); }, onFocusin: () => { focused = true; pause(); }, onFocusout: e => { if (!e.currentTarget.contains(e.relatedTarget)) {
                focused = false;
                resume();
            } } }, [(0, vue_1.h)('span', { class: 'yk-toast__dot', 'aria-hidden': 'true' }), (0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', {}, p.title), p.description ? (0, vue_1.h)('p', {}, p.description) : null]), (0, vue_1.h)('button', { type: 'button', 'aria-label': '关闭轻提示', onClick: close }, '×')]) : null;
    } });

},{"vue":"vue"}],
"packages/vue/src/components/command/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkCommand = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../dialog/index.js");
exports.YkCommand = (0, vue_1.defineComponent)({ name: 'YkCommand', props: { open: { type: Boolean, default: false }, items: { type: Array, default: () => [] }, label: { type: String, default: '快捷命令' } }, emits: ['update:open', 'select'], setup(p, { emit }) {
        const q = (0, vue_1.ref)(''), active = (0, vue_1.ref)(0), input = (0, vue_1.ref)(null), id = (0, vue_1.useId)(), list = (0, vue_1.computed)(() => p.items.filter(i => i.label.toLowerCase().includes(q.value.toLowerCase()))), enabled = (0, vue_1.computed)(() => list.value.filter(i => !i.disabled));
        (0, vue_1.watch)(q, () => active.value = 0);
        (0, vue_1.watch)(() => p.open, async (v) => { if (v) {
            q.value = '';
            active.value = 0;
            await (0, vue_1.nextTick)();
            input.value?.focus();
        } });
        const pick = item => { if (!item || item.disabled)
            return; emit('select', item); emit('update:open', false); };
        function key(e) { if (['ArrowDown', 'ArrowUp', 'Enter', 'Home', 'End'].includes(e.key)) {
            e.preventDefault();
            if (e.key === 'Enter')
                pick(enabled.value[active.value]);
            if (e.key === 'ArrowDown')
                active.value = Math.min(active.value + 1, enabled.value.length - 1);
            if (e.key === 'ArrowUp')
                active.value = Math.max(0, active.value - 1);
            if (e.key === 'Home')
                active.value = 0;
            if (e.key === 'End')
                active.value = enabled.value.length - 1;
        } }
        return () => (0, vue_1.h)(index_js_1.YkDialog, { title: p.label, open: p.open, 'onUpdate:open': v => emit('update:open', v), class: 'yk-command-dialog' }, { default: () => [
                (0, vue_1.h)('input', { ref: input, class: 'yk-command__input', placeholder: '搜索命令…', 'aria-label': '搜索命令', value: q.value, role: 'combobox', 'aria-expanded': true, 'aria-controls': id, 'aria-activedescendant': enabled.value[active.value] ? id + '-' + list.value.indexOf(enabled.value[active.value]) : undefined, onInput: e => q.value = e.target.value, onKeydown: key }),
                (0, vue_1.h)('div', { id, role: 'listbox', 'aria-label': p.label, class: 'yk-command__list' }, list.value.map((item, i) => (0, vue_1.h)('div', { id: id + '-' + i, role: 'option', 'aria-selected': enabled.value[active.value] === item, 'aria-disabled': item.disabled || undefined, class: 'yk-command__item', onPointermove: () => { if (!item.disabled)
                        active.value = enabled.value.indexOf(item); }, onMousedown: e => e.preventDefault(), onClick: () => pick(item) }, [item.label, item.shortcut ? (0, vue_1.h)('kbd', {}, item.shortcut) : null]))), !list.value.length ? (0, vue_1.h)('p', { role: 'status' }, '没有匹配命令') : null, (0, vue_1.h)('small', { class: 'yk-command__hint' }, '↑↓ 选择 · Enter 执行 · Esc 关闭')
            ]
        });
    } });

},{"vue":"vue","../dialog/index.js":"packages/vue/src/components/dialog/index.js"}],
"packages/vue/src/components/sidebar/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkSidebar = void 0;
const vue_1 = require("vue");
exports.YkSidebar = (0, vue_1.defineComponent)({ name: 'YkSidebar', props: { items: { type: Array, default: () => [] }, modelValue: String, brand: { type: String, default: '工作空间' }, collapsed: { type: Boolean, default: undefined } }, emits: ['update:modelValue', 'update:collapsed'], setup(p, { emit, slots }) { const local = (0, vue_1.ref)(false); return () => { const collapsed = p.collapsed === undefined ? local.value : p.collapsed; return (0, vue_1.h)('aside', { class: ['yk-sidebar', { 'is-collapsed': collapsed }], 'aria-label': p.brand }, [(0, vue_1.h)('div', { class: 'yk-sidebar__head' }, [!collapsed ? (0, vue_1.h)('strong', {}, p.brand) : null, (0, vue_1.h)('button', { type: 'button', 'aria-label': collapsed ? '展开侧栏' : '收起侧栏', 'aria-expanded': !collapsed, onClick: () => { local.value = !collapsed; emit('update:collapsed', !collapsed); } }, collapsed ? '›' : '‹')]), (0, vue_1.h)('nav', { 'aria-label': p.brand + '导航' }, p.items.map((item, i) => (0, vue_1.h)('button', { type: 'button', disabled: item.disabled, 'aria-current': p.modelValue === item.value ? 'page' : undefined, title: collapsed ? item.label : undefined, 'aria-label': item.label, onClick: () => emit('update:modelValue', item.value) }, [(0, vue_1.h)('span', { class: 'yk-sidebar__icon', 'aria-hidden': 'true' }, String(i + 1).padStart(2, '0')), !collapsed ? (0, vue_1.h)('span', {}, item.label) : null]))), slots.footer?.()]); }; } });

},{"vue":"vue"}],
"packages/vue/src/components/chart/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkChart = void 0;
const vue_1 = require("vue");
exports.YkChart = (0, vue_1.defineComponent)({ name: 'YkChart', props: { data: { type: Array, default: () => [] }, kind: { type: String, default: 'bar' }, label: { type: String, default: '数据趋势' }, showTable: { type: Boolean, default: true } }, setup(p) {
        const id = (0, vue_1.useId)(), clean = (0, vue_1.computed)(() => p.data.filter(d => typeof d.value === 'number' && Number.isFinite(d.value)).slice(0, 30));
        return () => {
            const values = clean.value, high = Math.max(0, ...values.map(d => d.value)) || 1, low = Math.min(0, ...values.map(d => d.value)), scale = high - low || 1, y = v => 164 - (v - low) / scale * 140, base = y(0), slot = 440 / (values.length || 1), x = i => 40 + slot * (i + .5);
            return (0, vue_1.h)('figure', { class: 'yk-chart', 'aria-labelledby': id }, [
                (0, vue_1.h)('figcaption', { id }, p.label), !values.length ? (0, vue_1.h)('p', {}, '暂无有效数据') : (0, vue_1.h)('svg', { viewBox: '0 0 520 220', role: 'img', 'aria-label': p.label + '，详细数值见下方数据表' }, [
                    (0, vue_1.h)('line', { x1: 30, x2: 490, y1: base, y2: base, stroke: 'var(--yk-border)' }), (0, vue_1.h)('text', { x: 8, y: 30, fill: 'var(--yk-text-muted)', 'font-size': 11 }, high), (0, vue_1.h)('text', { x: 8, y: 166, fill: 'var(--yk-text-muted)', 'font-size': 11 }, low),
                    ...(p.kind === 'line' ? [(0, vue_1.h)('polyline', { points: values.map((d, i) => `${x(i)},${y(d.value)}`).join(' '), fill: 'none', stroke: 'var(--yk-primary)', 'stroke-width': 3 }), ...values.map((d, i) => (0, vue_1.h)('circle', { cx: x(i), cy: y(d.value), r: 4, fill: 'var(--yk-primary)' }, (0, vue_1.h)('title', {}, `${d.label}: ${d.value}`)))] : values.map((d, i) => (0, vue_1.h)('rect', { x: x(i) - slot * .29, y: Math.min(base, y(d.value)), width: slot * .58, height: Math.max(1, Math.abs(base - y(d.value))), rx: 3, fill: 'var(--yk-primary)' }, (0, vue_1.h)('title', {}, `${d.label}: ${d.value}`)))),
                    ...values.map((d, i) => (0, vue_1.h)('text', { x: x(i), y: 194, 'text-anchor': 'middle', 'font-size': 10, fill: 'var(--yk-text-muted)' }, d.label.length > 6 ? d.label.slice(0, 6) + '…' : d.label))
                ]),
                (0, vue_1.h)('table', { class: p.showTable ? 'yk-chart__table' : 'yk-sr-only' }, [(0, vue_1.h)('caption', { class: 'yk-sr-only' }, p.label + '数据'), (0, vue_1.h)('thead', {}, (0, vue_1.h)('tr', {}, [(0, vue_1.h)('th', { scope: 'col' }, '项目'), (0, vue_1.h)('th', { scope: 'col' }, '数值')])), (0, vue_1.h)('tbody', {}, values.map(d => (0, vue_1.h)('tr', {}, [(0, vue_1.h)('th', { scope: 'row' }, d.label), (0, vue_1.h)('td', {}, d.value)])))])
            ]);
        };
    } });

},{"vue":"vue"}],
"packages/vue/src/components/tags-input/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkTagsInput = void 0;
const vue_1 = require("vue");
const control_js_1 = require("../../shared/control.js");
exports.YkTagsInput = (0, vue_1.defineComponent)({ name: 'YkTagsInput', props: { modelValue: { type: Array, default: undefined }, defaultValue: { type: Array, default: () => [] }, label: { type: String, default: '标签' }, placeholder: { type: String, default: '输入后按 Enter' }, max: { type: Number, default: 8 }, disabled: Boolean }, emits: ['update:modelValue'], setup(p, { emit }) {
        const model = (0, control_js_1.useControllable)(p, emit, 'modelValue', []), text = (0, vue_1.ref)(''), error = (0, vue_1.ref)(''), composing = (0, vue_1.ref)(false), id = (0, vue_1.useId)();
        function add() { const t = text.value.trim(); if (p.disabled || !t)
            return; if (t.length > 40) {
            error.value = '每个标签最多 40 字';
            return;
        } if (model.value.value.length >= p.max) {
            error.value = `最多 ${p.max} 个标签`;
            return;
        } if (model.value.value.includes(t)) {
            error.value = '标签已经存在';
            return;
        } model.set([...model.value.value, t]); text.value = ''; error.value = ''; }
        return () => (0, vue_1.h)('div', { class: 'yk-field' }, [(0, vue_1.h)('label', { for: id, class: 'yk-field__label' }, p.label), (0, vue_1.h)('div', { class: 'yk-tags-input' }, [...model.value.value.map((tag, i) => (0, vue_1.h)('span', { class: 'yk-tags-input__tag', key: tag }, [tag, (0, vue_1.h)('button', { type: 'button', disabled: p.disabled, 'aria-label': '移除标签 ' + tag, onClick: () => model.set(model.value.value.filter((_, j) => i !== j)) }, '×')])), (0, vue_1.h)('input', { id, value: text.value, placeholder: p.placeholder, disabled: p.disabled, maxlength: 40, 'aria-describedby': error.value ? id + '-error' : undefined, onInput: e => text.value = e.target.value, onCompositionstart: () => composing.value = true, onCompositionend: () => composing.value = false, onKeydown: e => { if (e.isComposing || composing.value || e.keyCode === 229)
                        return; if (e.key === 'Enter') {
                        e.preventDefault();
                        add();
                    } if (e.key === 'Backspace' && !text.value) {
                        model.set(model.value.value.slice(0, -1));
                    } } })]), error.value ? (0, vue_1.h)('small', { id: id + '-error', role: 'status', class: 'yk-field__error' }, error.value) : null]);
    } });

},{"vue":"vue","../../shared/control.js":"packages/vue/src/shared/control.js"}],
"packages/vue/src/ai/ai-streaming-text/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIStreamingText = void 0;
const vue_1 = require("vue");
exports.YkAIStreamingText = (0, vue_1.defineComponent)({ name: 'YkAIStreamingText', props: { content: { type: String, default: '' }, streaming: Boolean, cursor: { type: Boolean, default: true } }, setup(p) { return () => (0, vue_1.h)('div', { class: 'yk-ai-streaming', 'aria-busy': p.streaming }, [p.content, p.streaming && p.cursor ? (0, vue_1.h)('span', { class: 'yk-ai-streaming__cursor', 'aria-hidden': 'true' }, '▋') : null]); } });

},{"vue":"vue"}],
"packages/vue/src/ai/ai-message/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIMessage = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../ai-streaming-text/index.js");
exports.YkAIMessage = (0, vue_1.defineComponent)({ name: 'YkAIMessage', props: { role: { type: String, default: 'assistant' }, content: { type: String, default: '' }, name: String, status: { type: String, default: 'idle' }, appearance: { type: String, default: 'bubble' }, showAvatar: { type: Boolean, default: true }, showActions: { type: Boolean, default: true } }, emits: ['copy', 'feedback', 'retry'], setup(p, { emit, slots }) {
        const copied = (0, vue_1.ref)(''), feedback = (0, vue_1.ref)('');
        async function copy() { try {
            await navigator.clipboard.writeText(p.content);
            copied.value = '已复制';
            emit('copy', { ok: true });
        }
        catch {
            copied.value = '复制未获许可，请选中文本复制';
            emit('copy', { ok: false });
        } }
        function rate(v) { feedback.value = feedback.value === v ? '' : v; emit('feedback', feedback.value); }
        return () => (0, vue_1.h)('article', { class: ['yk-ai-message', `is-${p.role}`, `is-${p.appearance}`], 'aria-label': (p.name || ({ assistant: '助手', user: '你', system: '系统' }[p.role] || '消息')) }, [
            p.showAvatar ? (0, vue_1.h)('div', { class: 'yk-ai-message__avatar', 'aria-hidden': 'true' }, p.role === 'user' ? '你' : p.role === 'system' ? '·' : '✦') : null,
            (0, vue_1.h)('div', { class: 'yk-ai-message__main' }, [(0, vue_1.h)('div', { class: 'yk-ai-message__meta' }, [(0, vue_1.h)('strong', {}, p.name || (p.role === 'user' ? '你' : p.role === 'system' ? '系统' : 'YuanKit 助手')), p.status === 'streaming' ? (0, vue_1.h)('span', {}, '正在生成') : null]),
                (0, vue_1.h)('div', { class: 'yk-ai-message__body' }, slots.default?.() || (0, vue_1.h)(index_js_1.YkAIStreamingText, { content: p.content, streaming: p.status === 'streaming' })),
                p.status === 'error' ? (0, vue_1.h)('div', { class: 'yk-ai-message__error', role: 'status' }, ['回复未完成 ', (0, vue_1.h)('button', { type: 'button', onClick: () => emit('retry') }, '重试')]) : null,
                p.showActions && p.status !== 'streaming' ? (0, vue_1.h)('div', { class: 'yk-ai-message__actions' }, [(0, vue_1.h)('button', { type: 'button', 'aria-label': '复制消息', onClick: copy }, '复制'), p.role === 'assistant' ? (0, vue_1.h)('button', { type: 'button', 'aria-label': '有帮助', 'aria-pressed': feedback.value === 'positive', onClick: () => rate('positive') }, '赞') : null, p.role === 'assistant' ? (0, vue_1.h)('button', { type: 'button', 'aria-label': '需改进', 'aria-pressed': feedback.value === 'negative', onClick: () => rate('negative') }, '需改进') : null, copied.value ? (0, vue_1.h)('span', { role: 'status' }, copied.value) : null]) : null])
        ]);
    } });

},{"vue":"vue","../ai-streaming-text/index.js":"packages/vue/src/ai/ai-streaming-text/index.js"}],
"packages/vue/src/ai/ai-conversation/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIConversation = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../ai-message/index.js");
exports.YkAIConversation = (0, vue_1.defineComponent)({ name: 'YkAIConversation', props: { messages: { type: Array, default: () => [] }, height: { type: Number, default: 400 }, streaming: Boolean, appearance: { type: String, default: 'bubble' }, showAvatar: { type: Boolean, default: true }, emptyTitle: { type: String, default: '从一个问题开始' } }, emits: ['feedback', 'retry'], setup(p, { emit, slots, expose }) {
        const viewport = (0, vue_1.ref)(null), content = (0, vue_1.ref)(null), following = (0, vue_1.ref)(true);
        let observer, disposed = false;
        const track = () => { const e = viewport.value; if (e)
            following.value = e.scrollHeight - e.scrollTop - e.clientHeight < 48; };
        const latest = () => { const e = viewport.value; if (e) {
            e.scrollTop = e.scrollHeight;
            following.value = true;
        } };
        (0, vue_1.watch)(() => p.messages, async () => { const follow = following.value; await (0, vue_1.nextTick)(); if (!disposed && follow)
            latest(); }, { deep: true });
        (0, vue_1.onMounted)(() => { latest(); if (typeof ResizeObserver !== 'undefined') {
            observer = new ResizeObserver(() => { if (following.value)
                latest(); });
            if (content.value)
                observer.observe(content.value);
        } });
        (0, vue_1.onBeforeUnmount)(() => { disposed = true; observer?.disconnect(); });
        expose({ scrollToLatest: latest });
        return () => (0, vue_1.h)('section', { class: 'yk-ai-conversation' }, [
            (0, vue_1.h)('div', { ref: viewport, class: 'yk-ai-conversation__viewport', style: { height: Math.max(160, Math.min(1200, p.height)) + 'px' }, role: 'log', 'aria-label': '对话消息', 'aria-live': p.streaming ? 'off' : 'polite', 'aria-relevant': 'additions', tabindex: 0, onScroll: track }, (0, vue_1.h)('div', { ref: content, class: 'yk-ai-conversation__content' }, p.messages.length ? p.messages.map(m => (0, vue_1.h)(index_js_1.YkAIMessage, { key: m.id, role: m.role, content: m.content, name: m.name, status: m.status || 'idle', appearance: p.appearance, showAvatar: p.showAvatar, onFeedback: rating => emit('feedback', { id: m.id, rating }), onRetry: () => emit('retry', m.id) })) : slots.empty?.() || (0, vue_1.h)('div', { class: 'yk-ai-conversation__empty' }, [(0, vue_1.h)('span', { 'aria-hidden': 'true' }, '✦'), (0, vue_1.h)('h3', {}, p.emptyTitle), (0, vue_1.h)('p', {}, '消息与模型连接，由你的应用掌控。')]))),
            !following.value ? (0, vue_1.h)('button', { type: 'button', class: 'yk-ai-conversation__latest', onClick: latest }, '↓ 回到最新') : null
        ]);
    } });

},{"vue":"vue","../ai-message/index.js":"packages/vue/src/ai/ai-message/index.js"}],
"packages/vue/src/ai/ai-model-select/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIModelSelect = void 0;
const vue_1 = require("vue");
exports.YkAIModelSelect = (0, vue_1.defineComponent)({ name: 'YkAIModelSelect', props: { modelValue: { type: String, default: '' }, options: { type: Array, default: () => [] }, disabled: Boolean, label: { type: String, default: '模型' } }, emits: ['update:modelValue'], setup(p, { emit }) { const id = (0, vue_1.useId)(); return () => (0, vue_1.h)('label', { class: 'yk-ai-model-select', for: id }, [(0, vue_1.h)('span', {}, p.label), (0, vue_1.h)('select', { id, value: p.modelValue, disabled: p.disabled, onChange: e => { const o = p.options.find(o => o.value === e.target.value); if (o && !o.disabled)
                emit('update:modelValue', o.value); } }, [!p.options.some(o => o.value === p.modelValue) ? (0, vue_1.h)('option', { value: '', disabled: true }, '选择模型') : null, ...p.options.map(o => (0, vue_1.h)('option', { value: o.value, disabled: o.disabled }, o.label))])]); } });

},{"vue":"vue"}],
"packages/vue/src/ai/ai-attachments/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIAttachments = void 0;
const vue_1 = require("vue");
const safety_js_1 = require("../../shared/safety.js");
exports.YkAIAttachments = (0, vue_1.defineComponent)({ name: 'YkAIAttachments', props: { items: { type: Array, default: () => [] }, removable: { type: Boolean, default: true }, disabled: Boolean }, emits: ['remove'], setup(p, { emit }) { return () => (0, vue_1.h)('ul', { class: 'yk-ai-attachments', 'aria-label': '附件列表' }, p.items.map(item => (0, vue_1.h)('li', { key: item.id }, [(0, vue_1.h)('span', { class: 'yk-ai-attachments__icon', 'aria-hidden': 'true' }, '▧'), (0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', {}, item.name), (0, vue_1.h)('small', {}, (0, safety_js_1.formatBytes)(item.size))]), p.removable ? (0, vue_1.h)('button', { type: 'button', disabled: p.disabled, 'aria-label': '移除附件 ' + item.name, onClick: () => emit('remove', item.id) }, '×') : null]))); } });

},{"vue":"vue","../../shared/safety.js":"packages/vue/src/shared/safety.js"}],
"packages/vue/src/ai/ai-prompt-input/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIPromptInput = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../components/button/index.js");
const index_js_2 = require("../ai-model-select/index.js");
const index_js_3 = require("../ai-attachments/index.js");
const safety_js_1 = require("../../shared/safety.js");
exports.YkAIPromptInput = (0, vue_1.defineComponent)({ name: 'YkAIPromptInput', props: { modelValue: { type: String, default: '' }, model: { type: String, default: '' }, models: { type: Array, default: () => [] }, placeholder: { type: String, default: '描述你想完成的事情…' }, label: { type: String, default: '消息内容' }, busy: Boolean, disabled: Boolean, rows: { type: Number, default: 3 }, maxLength: { type: Number, default: 8000 }, sendKey: { type: String, default: 'enter' }, attachments: { type: Boolean, default: true }, accept: { type: String, default: '.txt,.md,.pdf,.png,.jpg,.jpeg' }, maxFiles: { type: Number, default: 3 } }, emits: ['update:modelValue', 'update:model', 'submit', 'stop', 'reject'], setup(p, { emit, expose }) {
        const id = (0, vue_1.useId)(), fileInput = (0, vue_1.ref)(null), textInput = (0, vue_1.ref)(null), files = (0, vue_1.ref)([]), error = (0, vue_1.ref)(''), composing = (0, vue_1.ref)(false);
        const canSend = (0, vue_1.computed)(() => !p.busy && !p.disabled && p.modelValue.length <= p.maxLength && !!(p.modelValue.trim() || files.value.length));
        function send() { if (!canSend.value)
            return; emit('submit', { text: p.modelValue.trim(), files: [...files.value], model: p.model }); }
        function add(list) { if (p.busy || p.disabled || !p.attachments)
            return; const result = (0, safety_js_1.validateFiles)(Array.from(list || []), { existing: files.value, maxFiles: p.maxFiles, accept: p.accept }); files.value = [...files.value, ...result.accepted]; error.value = result.rejected.map(x => `${x.file.name}：${x.reason}`).join('；'); if (result.rejected.length)
            emit('reject', result.rejected); }
        function key(e) { if (e.isComposing || composing.value || e.keyCode === 229)
            return; if (e.key === 'Enter' && !e.shiftKey && (p.sendKey === 'enter' || e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            send();
        } }
        expose({ clearAttachments: () => files.value = [], focus: () => textInput.value?.focus() });
        return () => (0, vue_1.h)('div', { class: ['yk-ai-prompt', { 'is-busy': p.busy }], 'aria-label': p.label }, [
            files.value.length ? (0, vue_1.h)(index_js_3.YkAIAttachments, { items: files.value.map((f, i) => ({ id: String(i), name: f.name, size: f.size })), disabled: p.busy || p.disabled, onRemove: id => files.value = files.value.filter((_, i) => String(i) !== id) }) : null,
            (0, vue_1.h)('label', { for: id, class: 'yk-sr-only' }, p.label), (0, vue_1.h)('textarea', { id, ref: textInput, value: p.modelValue, rows: p.rows, maxlength: p.maxLength, disabled: p.disabled, readonly: p.busy, placeholder: p.placeholder, 'aria-describedby': id + '-hint', onInput: e => emit('update:modelValue', e.target.value), onKeydown: key, onCompositionstart: () => composing.value = true, onCompositionend: () => composing.value = false, onDragover: e => { if (p.attachments)
                    e.preventDefault(); }, onDrop: e => { if (p.attachments) {
                    e.preventDefault();
                    add(e.dataTransfer.files);
                } } }),
            (0, vue_1.h)('div', { class: 'yk-ai-prompt__toolbar' }, [(0, vue_1.h)('div', { class: 'yk-ai-prompt__tools' }, [
                    p.attachments ? (0, vue_1.h)('button', { type: 'button', class: 'yk-ai-prompt__attach', disabled: p.busy || p.disabled, 'aria-label': '添加附件', onClick: () => fileInput.value?.click() }, '+') : null,
                    p.models.length ? (0, vue_1.h)(index_js_2.YkAIModelSelect, { options: p.models, modelValue: p.model, disabled: p.busy || p.disabled, 'onUpdate:modelValue': v => emit('update:model', v) }) : null
                ]),
                p.busy ? (0, vue_1.h)(index_js_1.YkButton, { size: 'sm', variant: 'outline', disabled: p.disabled, onClick: () => emit('stop') }, () => '停止生成') : (0, vue_1.h)(index_js_1.YkButton, { size: 'sm', disabled: !canSend.value, onClick: send }, () => '发送 ↑')]),
            (0, vue_1.h)('input', { ref: fileInput, type: 'file', accept: p.accept, multiple: p.maxFiles > 1, class: 'yk-sr-only', tabindex: -1, disabled: p.disabled || p.busy, 'aria-label': '选择 AI 附件', onChange: e => { add(e.target.files); e.target.value = ''; } }),
            (0, vue_1.h)('small', { id: id + '-hint', class: 'yk-ai-prompt__hint' }, `${p.sendKey === 'enter' ? 'Enter' : 'Ctrl / ⌘ + Enter'} 发送 · Shift + Enter 换行 · ${p.modelValue.length}/${p.maxLength}`),
            error.value ? (0, vue_1.h)('div', { class: 'yk-ai-prompt__error', role: 'alert' }, error.value) : null
        ]);
    } });

},{"vue":"vue","../../components/button/index.js":"packages/vue/src/components/button/index.js","../ai-model-select/index.js":"packages/vue/src/ai/ai-model-select/index.js","../ai-attachments/index.js":"packages/vue/src/ai/ai-attachments/index.js","../../shared/safety.js":"packages/vue/src/shared/safety.js"}],
"packages/vue/src/ai/ai-tool-call/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIToolCall = void 0;
const vue_1 = require("vue");
exports.YkAIToolCall = (0, vue_1.defineComponent)({ name: 'YkAIToolCall', props: { name: { type: String, default: 'search_documents' }, status: { type: String, default: 'success' }, input: { type: String, default: '' }, output: { type: String, default: '' }, defaultOpen: Boolean }, emits: ['approve', 'reject'], setup(p, { emit }) {
        const decision = (0, vue_1.ref)('');
        (0, vue_1.watch)(() => p.status, () => decision.value = '');
        const labels = { idle: '待执行', running: '执行中', success: '已完成', error: '执行失败', approval: '等待确认' };
        function decide(type) { if (p.status !== 'approval' || decision.value)
            return; decision.value = type; emit(type); }
        return () => (0, vue_1.h)('section', { class: 'yk-ai-tool', 'data-status': p.status }, [(0, vue_1.h)('details', { open: p.defaultOpen }, [(0, vue_1.h)('summary', {}, [(0, vue_1.h)('span', { class: 'yk-ai-tool__icon', 'aria-hidden': 'true' }, '⌘'), (0, vue_1.h)('strong', {}, p.name), (0, vue_1.h)('span', { class: 'yk-ai-tool__status' }, labels[p.status] || '未知状态')]), (0, vue_1.h)('div', { class: 'yk-ai-tool__content' }, [(0, vue_1.h)('small', {}, '输入参数'), (0, vue_1.h)('pre', {}, p.input || '无参数'), (0, vue_1.h)('small', {}, p.status === 'error' ? '错误信息' : '返回结果'), (0, vue_1.h)('pre', {}, p.output || '暂无结果')])]), p.status === 'approval' ? (0, vue_1.h)('div', { class: 'yk-ai-tool__approval' }, [(0, vue_1.h)('span', {}, decision.value ? '已发送决定，等待应用更新状态。' : '此操作需要人工确认；界面不会自行执行。'), (0, vue_1.h)('button', { type: 'button', disabled: !!decision.value, onClick: () => decide('reject') }, '拒绝'), (0, vue_1.h)('button', { type: 'button', disabled: !!decision.value, onClick: () => decide('approve') }, '确认执行')]) : null]);
    } });

},{"vue":"vue"}],
"packages/vue/src/ai/ai-sources/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAISources = void 0;
const vue_1 = require("vue");
const safety_js_1 = require("../../shared/safety.js");
exports.YkAISources = (0, vue_1.defineComponent)({ name: 'YkAISources', props: { items: { type: Array, default: () => [] }, label: { type: String, default: '参考来源' }, defaultOpen: { type: Boolean, default: true } }, setup(p) { return () => (0, vue_1.h)('details', { class: 'yk-ai-sources', open: p.defaultOpen }, [(0, vue_1.h)('summary', {}, [p.label, (0, vue_1.h)('span', {}, p.items.length)]), (0, vue_1.h)('ol', {}, p.items.map((item, i) => { const url = (0, safety_js_1.safeWebUrl)(item.url); return (0, vue_1.h)('li', { key: item.id }, [(0, vue_1.h)('span', { class: 'yk-ai-sources__index' }, i + 1), (0, vue_1.h)('div', {}, [url ? (0, vue_1.h)('a', { href: url, target: '_blank', rel: 'noopener noreferrer' }, item.title + ' ↗') : (0, vue_1.h)('strong', {}, item.title), (0, vue_1.h)('small', {}, url ? new URL(url).hostname : '链接不可用'), item.description ? (0, vue_1.h)('p', {}, item.description) : null])]); }))]); } });

},{"vue":"vue","../../shared/safety.js":"packages/vue/src/shared/safety.js"}],
"packages/vue/src/ai/ai-activity/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIActivity = void 0;
const vue_1 = require("vue");
exports.YkAIActivity = (0, vue_1.defineComponent)({ name: 'YkAIActivity', props: { items: { type: Array, default: () => [] }, label: { type: String, default: '任务进展' } }, setup(p) { const labels = { pending: '等待', running: '进行中', success: '完成', error: '失败' }; return () => (0, vue_1.h)('section', { class: 'yk-ai-activity', 'aria-label': p.label }, [(0, vue_1.h)('h3', {}, p.label), (0, vue_1.h)('ol', {}, p.items.map(step => (0, vue_1.h)('li', { key: step.id, 'data-status': step.status }, [(0, vue_1.h)('span', { class: 'yk-ai-activity__mark', 'aria-hidden': 'true' }, step.status === 'success' ? '✓' : step.status === 'error' ? '!' : '·'), (0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', {}, step.label), step.description ? (0, vue_1.h)('p', {}, step.description) : null]), (0, vue_1.h)('small', {}, labels[step.status] || '等待')])))]); } });

},{"vue":"vue"}],
"packages/vue/src/ai/ai-suggestions/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAISuggestions = void 0;
const vue_1 = require("vue");
exports.YkAISuggestions = (0, vue_1.defineComponent)({ name: 'YkAISuggestions', props: { items: { type: Array, default: () => [] }, disabled: Boolean, layout: { type: String, default: 'chips' } }, emits: ['select'], setup(p, { emit }) { return () => (0, vue_1.h)('div', { class: ['yk-ai-suggestions', 'is-' + p.layout], role: 'group', 'aria-label': '建议问题' }, p.items.map(item => (0, vue_1.h)('button', { type: 'button', key: item.value, disabled: p.disabled || item.disabled, onClick: () => emit('select', item) }, [(0, vue_1.h)('strong', {}, item.label), p.layout === 'cards' && item.content ? (0, vue_1.h)('small', {}, item.content) : null, (0, vue_1.h)('span', { 'aria-hidden': 'true' }, '↗')]))); } });

},{"vue":"vue"}],
"packages/vue/src/ai/ai-artifact/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIArtifact = void 0;
const vue_1 = require("vue");
const safety_js_1 = require("../../shared/safety.js");
exports.YkAIArtifact = (0, vue_1.defineComponent)({ name: 'YkAIArtifact', props: { title: { type: String, default: '设计产物' }, content: { type: String, default: '' }, summary: { type: String, default: '生成的内容仅供审阅，应用前请检查。' }, language: { type: String, default: 'text' }, downloadable: { type: Boolean, default: true } }, emits: ['download', 'copy'], setup(p, { emit }) {
        const tab = (0, vue_1.ref)('content'), feedback = (0, vue_1.ref)('');
        async function copy() { try {
            await navigator.clipboard.writeText(p.content);
            feedback.value = '已复制';
            emit('copy', { ok: true });
        }
        catch {
            feedback.value = '请选中文本复制';
            emit('copy', { ok: false });
        } }
        function download() { const url = URL.createObjectURL(new Blob([p.content], { type: 'text/plain;charset=utf-8' })), a = document.createElement('a'); a.href = url; a.download = (0, safety_js_1.safeFilename)(p.title); a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); emit('download'); }
        return () => (0, vue_1.h)('section', { class: 'yk-ai-artifact' }, [(0, vue_1.h)('header', {}, [(0, vue_1.h)('div', {}, [(0, vue_1.h)('span', { class: 'yk-ai-artifact__kicker' }, 'ARTIFACT / ' + p.language), (0, vue_1.h)('h3', {}, p.title)]), (0, vue_1.h)('div', { class: 'yk-ai-artifact__actions' }, [(0, vue_1.h)('button', { type: 'button', onClick: copy }, '复制'), p.downloadable ? (0, vue_1.h)('button', { type: 'button', onClick: download }, '导出文本') : null])]), (0, vue_1.h)('div', { class: 'yk-ai-artifact__tabs', role: 'group', 'aria-label': '产物视图' }, [['content', '内容'], ['summary', '说明']].map(([value, label]) => (0, vue_1.h)('button', { type: 'button', 'aria-pressed': tab.value === value, onClick: () => tab.value = value }, label))), tab.value === 'content' ? (0, vue_1.h)('pre', {}, (0, vue_1.h)('code', {}, p.content)) : (0, vue_1.h)('p', { class: 'yk-ai-artifact__summary' }, p.summary), feedback.value ? (0, vue_1.h)('small', { role: 'status' }, feedback.value) : null, (0, vue_1.h)('footer', {}, '安全文本预览 · 不执行 HTML / JavaScript')]);
    } });

},{"vue":"vue","../../shared/safety.js":"packages/vue/src/shared/safety.js"}],
"packages/vue/src/ai/ai-usage/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIUsage = void 0;
const vue_1 = require("vue");
exports.YkAIUsage = (0, vue_1.defineComponent)({ name: 'YkAIUsage', props: { used: { type: Number, default: 0 }, limit: { type: Number, default: 32000 }, label: { type: String, default: '上下文使用量' } }, setup(p) { const used = (0, vue_1.computed)(() => Math.max(0, Number.isFinite(p.used) ? p.used : 0)), limit = (0, vue_1.computed)(() => Math.max(1, Number.isFinite(p.limit) ? p.limit : 1)), percent = (0, vue_1.computed)(() => Math.min(100, Math.round(used.value / limit.value * 100))); return () => (0, vue_1.h)('div', { class: 'yk-ai-usage' }, [(0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', {}, p.label), (0, vue_1.h)('span', {}, percent.value + '%')]), (0, vue_1.h)('progress', { max: limit.value, value: Math.min(used.value, limit.value), 'aria-label': p.label }), (0, vue_1.h)('small', {}, `${used.value.toLocaleString()} / ${limit.value.toLocaleString()} tokens`), used.value > limit.value ? (0, vue_1.h)('small', { class: 'yk-ai-usage__over', role: 'status' }, '已超过设定上限') : null]); } });

},{"vue":"vue"}],
"packages/vue/src/blocks/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIAssistantDock = exports.YkAIKnowledgePanel = exports.YkBentoGrid = exports.YkSteps = exports.YkContact = exports.YkNewsletter = exports.YkTestimonials = exports.YkFaq = exports.YkPricing = exports.YkLogoCloud = exports.YkStats = exports.YkFeatureGrid = exports.YkAnnouncement = exports.YkFooter = exports.YkCta = exports.YkHero = exports.YkNavbar = void 0;
var index_js_1 = require("./navbar/index.js");
Object.defineProperty(exports, "YkNavbar", { enumerable: true, get: function () { return index_js_1.YkNavbar; } });
var index_js_2 = require("./hero/index.js");
Object.defineProperty(exports, "YkHero", { enumerable: true, get: function () { return index_js_2.YkHero; } });
var index_js_3 = require("./cta/index.js");
Object.defineProperty(exports, "YkCta", { enumerable: true, get: function () { return index_js_3.YkCta; } });
var index_js_4 = require("./footer/index.js");
Object.defineProperty(exports, "YkFooter", { enumerable: true, get: function () { return index_js_4.YkFooter; } });
var index_js_5 = require("./announcement/index.js");
Object.defineProperty(exports, "YkAnnouncement", { enumerable: true, get: function () { return index_js_5.YkAnnouncement; } });
var index_js_6 = require("./extended/index.js");
Object.defineProperty(exports, "YkFeatureGrid", { enumerable: true, get: function () { return index_js_6.YkFeatureGrid; } });
Object.defineProperty(exports, "YkStats", { enumerable: true, get: function () { return index_js_6.YkStats; } });
Object.defineProperty(exports, "YkLogoCloud", { enumerable: true, get: function () { return index_js_6.YkLogoCloud; } });
Object.defineProperty(exports, "YkPricing", { enumerable: true, get: function () { return index_js_6.YkPricing; } });
Object.defineProperty(exports, "YkFaq", { enumerable: true, get: function () { return index_js_6.YkFaq; } });
Object.defineProperty(exports, "YkTestimonials", { enumerable: true, get: function () { return index_js_6.YkTestimonials; } });
Object.defineProperty(exports, "YkNewsletter", { enumerable: true, get: function () { return index_js_6.YkNewsletter; } });
Object.defineProperty(exports, "YkContact", { enumerable: true, get: function () { return index_js_6.YkContact; } });
Object.defineProperty(exports, "YkSteps", { enumerable: true, get: function () { return index_js_6.YkSteps; } });
Object.defineProperty(exports, "YkBentoGrid", { enumerable: true, get: function () { return index_js_6.YkBentoGrid; } });
var index_js_7 = require("./ai-knowledge-panel/index.js");
Object.defineProperty(exports, "YkAIKnowledgePanel", { enumerable: true, get: function () { return index_js_7.YkAIKnowledgePanel; } });
var index_js_8 = require("./ai-assistant-dock/index.js");
Object.defineProperty(exports, "YkAIAssistantDock", { enumerable: true, get: function () { return index_js_8.YkAIAssistantDock; } });

},{"./navbar/index.js":"packages/vue/src/blocks/navbar/index.js","./hero/index.js":"packages/vue/src/blocks/hero/index.js","./cta/index.js":"packages/vue/src/blocks/cta/index.js","./footer/index.js":"packages/vue/src/blocks/footer/index.js","./announcement/index.js":"packages/vue/src/blocks/announcement/index.js","./extended/index.js":"packages/vue/src/blocks/extended/index.js","./ai-knowledge-panel/index.js":"packages/vue/src/blocks/ai-knowledge-panel/index.js","./ai-assistant-dock/index.js":"packages/vue/src/blocks/ai-assistant-dock/index.js"}],
"packages/vue/src/blocks/navbar/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkNavbar = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../components/button/index.js");
exports.YkNavbar = (0, vue_1.defineComponent)({ name: 'YkNavbar', inheritAttrs: false, props: { brand: { type: String, default: 'YuanKit' }, items: { type: Array, default: () => [] }, actionLabel: { type: String, default: '开始构建' } }, emits: ['action'], setup(p, { attrs, emit }) { const open = (0, vue_1.ref)(false), id = (0, vue_1.useId)(); const navigate = item => { open.value = false; emit('action', { action: 'navigate', value: item.value }); }; return () => (0, vue_1.h)('header', (0, vue_1.mergeProps)(attrs, { class: 'yk-navbar' }), [(0, vue_1.h)('strong', { class: 'yk-navbar__brand' }, [(0, vue_1.h)('span', { 'aria-hidden': 'true' }, '◈'), p.brand]), (0, vue_1.h)('button', { class: 'yk-navbar__toggle', type: 'button', 'aria-expanded': open.value, 'aria-controls': 'yk-nav-' + id, onClick: () => open.value = !open.value }, open.value ? '收起菜单' : '菜单'), (0, vue_1.h)('nav', { id: 'yk-nav-' + id, 'aria-label': '主导航', class: { 'is-open': open.value } }, p.items.map(item => (0, vue_1.h)('button', { key: item.value, type: 'button', disabled: item.disabled, onClick: () => navigate(item) }, item.label))), (0, vue_1.h)(index_js_1.YkButton, { class: 'yk-navbar__action', onClick: () => emit('action', { action: 'primary' }) }, () => p.actionLabel)]); } });

},{"vue":"vue","../../components/button/index.js":"packages/vue/src/components/button/index.js"}],
"packages/vue/src/blocks/hero/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkHero = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../components/button/index.js");
exports.YkHero = (0, vue_1.defineComponent)({ name: 'YkHero', inheritAttrs: false, props: { label: String, description: String, eyebrow: String, actionLabel: String, secondaryLabel: String, layout: { type: String, default: 'split' } }, emits: ['action'], setup(p, { attrs, slots, emit }) { return () => (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-hero', 'yk-layout--' + p.layout] }), [(0, vue_1.h)('div', { class: 'yk-block-copy' }, [(0, vue_1.h)('p', { class: 'yk-block-eyebrow' }, p.eyebrow), (0, vue_1.h)('h2', { class: 'yk-block-title' }, p.label), (0, vue_1.h)('p', { class: 'yk-block-description' }, p.description), (0, vue_1.h)('div', { class: 'yk-block-actions' }, [p.actionLabel ? (0, vue_1.h)(index_js_1.YkButton, { onClick: () => emit('action', { action: 'primary' }) }, () => p.actionLabel) : null, p.secondaryLabel ? (0, vue_1.h)(index_js_1.YkButton, { variant: 'outline', onClick: () => emit('action', { action: 'secondary' }) }, () => p.secondaryLabel) : null])]), slots.visual?.() ?? (0, vue_1.h)('div', { class: 'yk-hero__visual', 'aria-label': '设计系统组成示例' }, [(0, vue_1.h)('span', { class: 'yk-hero__orb', 'aria-hidden': 'true' }), (0, vue_1.h)('div', { class: 'yk-hero__tile' }, [(0, vue_1.h)('small', {}, '01 / FOUNDATION'), (0, vue_1.h)('strong', {}, '每一处，都由你定义'), (0, vue_1.h)('div', { class: 'yk-hero__swatches', 'aria-hidden': 'true' }, [(0, vue_1.h)('i'), (0, vue_1.h)('i'), (0, vue_1.h)('i')])]), (0, vue_1.h)('div', { class: 'yk-hero__note' }, [(0, vue_1.h)('span', {}, '✓'), (0, vue_1.h)('span', {}, '组件 + 规范 + 可复用方案')])])]); } });

},{"vue":"vue","../../components/button/index.js":"packages/vue/src/components/button/index.js"}],
"packages/vue/src/blocks/cta/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkCta = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../components/button/index.js");
exports.YkCta = (0, vue_1.defineComponent)({ name: 'YkCta', inheritAttrs: false, props: { label: String, description: String, actionLabel: String, secondaryLabel: String, layout: { type: String, default: 'center' } }, emits: ['action'], setup(p, { attrs, emit }) { return () => (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-cta', 'yk-layout--' + p.layout] }), [(0, vue_1.h)('div', { class: 'yk-block-copy' }, [(0, vue_1.h)('h2', { class: 'yk-block-title' }, p.label), (0, vue_1.h)('p', { class: 'yk-block-description' }, p.description)]), (0, vue_1.h)('div', { class: 'yk-block-actions' }, [p.actionLabel ? (0, vue_1.h)(index_js_1.YkButton, { onClick: () => emit('action', { action: 'primary' }) }, () => p.actionLabel) : null, p.secondaryLabel ? (0, vue_1.h)(index_js_1.YkButton, { variant: 'outline', onClick: () => emit('action', { action: 'secondary' }) }, () => p.secondaryLabel) : null])]); } });

},{"vue":"vue","../../components/button/index.js":"packages/vue/src/components/button/index.js"}],
"packages/vue/src/blocks/footer/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkFooter = void 0;
const vue_1 = require("vue");
exports.YkFooter = (0, vue_1.defineComponent)({ name: 'YkFooter', inheritAttrs: false, props: { brand: { type: String, default: 'YuanKit' }, footerNote: String, items: { type: Array, default: () => [] } }, emits: ['action'], setup(p, { attrs, emit }) { return () => (0, vue_1.h)('footer', (0, vue_1.mergeProps)(attrs, { class: 'yk-footer' }), [(0, vue_1.h)('div', { class: 'yk-footer__top' }, [(0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', { class: 'yk-footer__brand' }, p.brand), (0, vue_1.h)('p', {}, p.footerNote)]), (0, vue_1.h)('nav', { 'aria-label': '页脚导航' }, p.items.map(item => (0, vue_1.h)('button', { type: 'button', key: item.value, disabled: item.disabled, onClick: () => emit('action', { action: 'navigate', value: item.value }) }, item.label)))]), (0, vue_1.h)('div', { class: 'yk-footer__bottom' }, [(0, vue_1.h)('span', {}, p.brand + ' / Design assets'), (0, vue_1.h)('span', {}, '让每一次设计，都成为积累。')])]); } });

},{"vue":"vue"}],
"packages/vue/src/blocks/announcement/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAnnouncement = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../components/button/index.js");
exports.YkAnnouncement = (0, vue_1.defineComponent)({ name: 'YkAnnouncement', props: { label: { type: String, default: 'YuanKit 组件工作台已更新' }, actionLabel: { type: String, default: '查看更新' }, dismissible: { type: Boolean, default: true } }, emits: ['action'], setup(p, { emit }) { return () => (0, vue_1.h)('section', { class: 'yk-announcement', role: 'status' }, [(0, vue_1.h)('div', { class: 'yk-announcement__copy' }, [(0, vue_1.h)('span', { class: 'yk-announcement__dot', 'aria-hidden': 'true' }), (0, vue_1.h)('span', {}, p.label)]), (0, vue_1.h)(index_js_1.YkButton, { size: 'sm', variant: 'outline', onClick: () => emit('action', { action: 'primary' }) }, () => p.actionLabel), p.dismissible ? (0, vue_1.h)('button', { class: 'yk-announcement__close', type: 'button', 'aria-label': '关闭公告', onClick: () => emit('action', { action: 'dismiss' }) }, '×') : null]); } });

},{"vue":"vue","../../components/button/index.js":"packages/vue/src/components/button/index.js"}],
"packages/vue/src/blocks/extended/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkBentoGrid = exports.YkSteps = exports.YkContact = exports.YkNewsletter = exports.YkTestimonials = exports.YkFaq = exports.YkPricing = exports.YkLogoCloud = exports.YkStats = exports.YkFeatureGrid = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../components/button/index.js");
const index_js_2 = require("../../components/card/index.js");
const section = (name, render) => (0, vue_1.defineComponent)({ name, inheritAttrs: false, props: { label: String, description: String, items: { type: Array, default: () => [] }, actionLabel: String, secondaryLabel: String, layout: { type: String, default: 'center' }, brand: String }, emits: ['action'], setup(p, { attrs, emit }) { return () => (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-section', 'yk-section--' + name.replace('Yk', '').toLowerCase(), 'is-' + p.layout] }), render(p, (action, value) => emit('action', { action, value }))); } });
exports.YkFeatureGrid = section('YkFeatureGrid', (p, fire) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || '能力，一眼看清'), (0, vue_1.h)('p', {}, p.description || '把核心价值拆成可扫描的小块。')]), (0, vue_1.h)('div', { class: 'yk-feature-grid' }, (p.items.length ? p.items : [{ label: '一致设计', content: '统一 Token 与组件规则。' }, { label: '真实代码', content: '预览与业务使用同源。' }, { label: '可持续扩展', content: '组件、区块、页面、动效分层维护。' }]).map((x, i) => (0, vue_1.h)(index_js_2.YkCard, { title: x.label || `能力 ${i + 1}`, description: x.content || '可复用说明' }, { default: () => (0, vue_1.h)('span', { class: 'yk-section__index' }, String(i + 1).padStart(2, '0')) })))]);
exports.YkStats = section('YkStats', (p) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || '关键数字'), (0, vue_1.h)('p', {}, p.description || '用少量数字建立信息锚点。')]), (0, vue_1.h)('div', { class: 'yk-stats' }, (p.items.length ? p.items : [{ label: '组件', content: '32+' }, { label: '区块', content: '15+' }, { label: '模板', content: '12+' }]).map(x => (0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', {}, x.content || '—'), (0, vue_1.h)('span', {}, x.label)])))]);
exports.YkLogoCloud = section('YkLogoCloud', (p) => [(0, vue_1.h)('p', { class: 'yk-section__overline' }, p.label || '适配你的技术栈'), (0, vue_1.h)('div', { class: 'yk-logo-cloud' }, (p.items.length ? p.items : [{ label: 'Vue' }, { label: 'Vite' }, { label: 'TypeScript' }, { label: 'Reka UI' }, { label: 'Playwright' }]).map(x => (0, vue_1.h)('span', {}, x.label)))]);
exports.YkPricing = section('YkPricing', (p, fire) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || '选择适合你的方案'), (0, vue_1.h)('p', {}, p.description || '价格只是示例，真正业务金额由项目传入。')]), (0, vue_1.h)('div', { class: 'yk-pricing' }, (p.items.length ? p.items : [{ label: '基础版', content: '适合个人项目' }, { label: '团队版', content: '共享主题与资产' }, { label: '企业版', content: '私有分发与治理' }]).map((x, i) => (0, vue_1.h)(index_js_2.YkCard, { title: x.label, description: x.content, variant: i === 1 ? 'elevated' : 'outlined' }, { default: () => (0, vue_1.h)('div', { class: 'yk-price' }, i === 0 ? '¥0' : i === 1 ? '¥99' : '定制'), footer: () => (0, vue_1.h)(index_js_1.YkButton, { variant: i === 1 ? 'primary' : 'outline', onClick: () => fire('select', x.label) }, () => p.actionLabel || '选择方案') })))]);
exports.YkFaq = section('YkFaq', (p) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || '常见问题'), (0, vue_1.h)('p', {}, p.description || '把高频疑问放在决策路径附近。')]), (0, vue_1.h)('div', { class: 'yk-faq' }, (p.items.length ? p.items : [{ label: '可以改样式吗？', content: '可以，通过主题、同类默认和实例三级配置。' }, { label: '能直接用于 Vue 项目吗？', content: '可以，组件包和导出代码都基于 Vue。' }]).map(x => (0, vue_1.h)('details', {}, [(0, vue_1.h)('summary', {}, x.label), (0, vue_1.h)('p', {}, x.content)])))]);
exports.YkTestimonials = section('YkTestimonials', (p) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || '来自真实使用场景的反馈'), (0, vue_1.h)('p', {}, p.description || '案例文本请替换为你自己的真实内容。')]), (0, vue_1.h)('div', { class: 'yk-testimonials' }, (p.items.length ? p.items : [{ label: '产品团队', content: '统一组件以后，页面返工明显减少。' }, { label: '研发团队', content: '同一套参数可以直接复用到业务项目。' }]).map(x => (0, vue_1.h)('blockquote', {}, [(0, vue_1.h)('p', {}, '“' + x.content + '”'), (0, vue_1.h)('footer', {}, x.label)])))]);
exports.YkNewsletter = section('YkNewsletter', (p, fire) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || '获取更新'), (0, vue_1.h)('p', {}, p.description || '留下邮箱，收到组件库与设计资产的更新。')]), (0, vue_1.h)('form', { class: 'yk-newsletter', onSubmit: e => { e.preventDefault(); fire('submit', new FormData(e.currentTarget).get('email')); } }, [(0, vue_1.h)('input', { name: 'email', type: 'email', required: true, placeholder: 'name@example.com', 'aria-label': '邮箱' }), (0, vue_1.h)(index_js_1.YkButton, { type: 'submit' }, () => p.actionLabel || '订阅')])]);
exports.YkContact = section('YkContact', (p, fire) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || '和我们聊聊'), (0, vue_1.h)('p', {}, p.description || '适合联系、咨询、合作等简单入口。')]), (0, vue_1.h)('div', { class: 'yk-contact' }, [(0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', {}, '项目咨询'), (0, vue_1.h)('p', {}, '说明你的目标、页面类型和技术环境。')]), (0, vue_1.h)(index_js_1.YkButton, { onClick: () => fire('contact') }, () => p.actionLabel || '发起联系')])]);
exports.YkSteps = section('YkSteps', (p) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || '三步完成'), (0, vue_1.h)('p', {}, p.description || '把长流程压缩成清晰的阶段。')]), (0, vue_1.h)('ol', { class: 'yk-steps' }, (p.items.length ? p.items : [{ label: '选择资产', content: '组件、区块、模板或动效。' }, { label: '调整参数', content: '实时预览并保存方案。' }, { label: '导出使用', content: '带到你的 Vue 项目。' }]).map((x, i) => (0, vue_1.h)('li', {}, [(0, vue_1.h)('span', {}, i + 1), (0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', {}, x.label), (0, vue_1.h)('p', {}, x.content)])])))]);
exports.YkBentoGrid = section('YkBentoGrid', (p) => [(0, vue_1.h)('div', { class: 'yk-section__head' }, [(0, vue_1.h)('h2', {}, p.label || 'Bento 信息区'), (0, vue_1.h)('p', {}, p.description || '不同跨度的卡片形成更有节奏的产品展示。')]), (0, vue_1.h)('div', { class: 'yk-bento' }, (p.items.length ? p.items : [{ label: '主题', content: '全局 Token' }, { label: '组件', content: 'Vue 原生' }, { label: '页面', content: '快速组合' }, { label: '动效', content: '可复用 Recipe' }]).map((x, i) => (0, vue_1.h)('article', { class: { 'is-wide': i === 0 } }, [(0, vue_1.h)('small', {}, String(i + 1).padStart(2, '0')), (0, vue_1.h)('h3', {}, x.label), (0, vue_1.h)('p', {}, x.content)])))]);

},{"vue":"vue","../../components/button/index.js":"packages/vue/src/components/button/index.js","../../components/card/index.js":"packages/vue/src/components/card/index.js"}],
"packages/vue/src/blocks/ai-knowledge-panel/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIKnowledgePanel = void 0;
const vue_1 = require("vue");
const safety_js_1 = require("../../shared/safety.js");
exports.YkAIKnowledgePanel = (0, vue_1.defineComponent)({ name: 'YkAIKnowledgePanel', props: { items: { type: Array, default: () => [] }, selected: { type: Array, default: () => [] }, title: { type: String, default: '知识来源' } }, emits: ['update:selected'], setup(p, { emit }) {
        const query = (0, vue_1.ref)(''), filtered = (0, vue_1.computed)(() => p.items.filter(i => `${i.title} ${i.description || ''}`.toLowerCase().includes(query.value.toLowerCase())));
        function toggle(id) { emit('update:selected', p.selected.includes(id) ? p.selected.filter(x => x !== id) : [...p.selected, id]); }
        return () => (0, vue_1.h)('section', { class: 'yk-ai-knowledge' }, [(0, vue_1.h)('header', {}, [(0, vue_1.h)('h3', {}, p.title), (0, vue_1.h)('span', {}, p.selected.length + ' 已选')]), (0, vue_1.h)('input', { type: 'search', value: query.value, placeholder: '搜索资料', 'aria-label': '搜索知识资料', onInput: e => query.value = e.target.value }), (0, vue_1.h)('div', { class: 'yk-ai-knowledge__list' }, filtered.value.length ? filtered.value.map(item => (0, vue_1.h)('article', { key: item.id }, [(0, vue_1.h)('label', {}, [(0, vue_1.h)('input', { type: 'checkbox', checked: p.selected.includes(item.id), onChange: () => toggle(item.id) }), (0, vue_1.h)('strong', {}, item.title)]), (0, vue_1.h)('p', {}, item.description || '资料摘要'), (0, safety_js_1.safeWebUrl)(item.url) ? (0, vue_1.h)('a', { href: (0, safety_js_1.safeWebUrl)(item.url), target: '_blank', rel: 'noopener noreferrer' }, '访问来源 ↗') : null])) : (0, vue_1.h)('p', {}, '没有匹配资料')), (0, vue_1.h)('footer', {}, '所选资料仅作为上下文意图；检索与读取由后端实现。')]);
    } });

},{"vue":"vue","../../shared/safety.js":"packages/vue/src/shared/safety.js"}],
"packages/vue/src/blocks/ai-assistant-dock/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIAssistantDock = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../ai/ai-conversation/index.js");
const index_js_2 = require("../../ai/ai-prompt-input/index.js");
exports.YkAIAssistantDock = (0, vue_1.defineComponent)({ name: 'YkAIAssistantDock', props: { title: { type: String, default: '页面助手' }, messages: { type: Array, default: () => [] }, modelValue: { type: String, default: '' }, busy: Boolean, height: { type: Number, default: 280 } }, emits: ['update:modelValue', 'submit', 'stop', 'close'], setup(p, { emit, slots }) { return () => (0, vue_1.h)('section', { class: 'yk-ai-dock' }, [(0, vue_1.h)('header', {}, [(0, vue_1.h)('span', { 'aria-hidden': 'true' }, '✦'), (0, vue_1.h)('strong', {}, p.title), (0, vue_1.h)('button', { type: 'button', 'aria-label': '关闭助手', onClick: () => emit('close') }, '×')]), slots.context?.(), (0, vue_1.h)(index_js_1.YkAIConversation, { messages: p.messages, height: p.height, streaming: p.busy, appearance: 'plain' }), (0, vue_1.h)('div', { class: 'yk-ai-dock__composer' }, (0, vue_1.h)(index_js_2.YkAIPromptInput, { modelValue: p.modelValue, busy: p.busy, rows: 2, attachments: false, 'onUpdate:modelValue': v => emit('update:modelValue', v), onSubmit: v => emit('submit', v), onStop: () => emit('stop') }))]); } });

},{"vue":"vue","../../ai/ai-conversation/index.js":"packages/vue/src/ai/ai-conversation/index.js","../../ai/ai-prompt-input/index.js":"packages/vue/src/ai/ai-prompt-input/index.js"}],
"packages/vue/src/templates/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIChatPage = exports.YkPageTemplate = exports.YkStatusPage = void 0;
var index_js_1 = require("./status-page/index.js");
Object.defineProperty(exports, "YkStatusPage", { enumerable: true, get: function () { return index_js_1.YkStatusPage; } });
var index_js_2 = require("./extended/index.js");
Object.defineProperty(exports, "YkPageTemplate", { enumerable: true, get: function () { return index_js_2.YkPageTemplate; } });
var index_js_3 = require("./ai-chat-page/index.js");
Object.defineProperty(exports, "YkAIChatPage", { enumerable: true, get: function () { return index_js_3.YkAIChatPage; } });

},{"./status-page/index.js":"packages/vue/src/templates/status-page/index.js","./extended/index.js":"packages/vue/src/templates/extended/index.js","./ai-chat-page/index.js":"packages/vue/src/templates/ai-chat-page/index.js"}],
"packages/vue/src/templates/status-page/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkStatusPage = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../components/button/index.js");
exports.YkStatusPage = (0, vue_1.defineComponent)({ name: 'YkStatusPage', inheritAttrs: false, props: { status: { type: String, default: '404' }, label: String, description: String, eyebrow: String, actionLabel: String, secondaryLabel: String, layout: { type: String, default: 'split' } }, emits: ['action'], setup(p, { attrs, slots, emit }) { return () => (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-status-page', 'yk-layout--' + p.layout] }), [slots.illustration?.() ?? (0, vue_1.h)('div', { class: 'yk-status__art', 'aria-hidden': 'true' }, [(0, vue_1.h)('div', { class: 'yk-status__orbit' }), (0, vue_1.h)('strong', { class: 'yk-status__glyph' }, p.status === 'maintenance' ? '↻' : p.status), (0, vue_1.h)('span', { class: 'yk-status__caption' }, 'A SMALL DETOUR')]), (0, vue_1.h)('div', { class: 'yk-block-copy' }, [(0, vue_1.h)('p', { class: 'yk-block-eyebrow' }, p.eyebrow || 'YUANKIT / ' + p.status), (0, vue_1.h)('h2', { class: 'yk-block-title' }, p.label), (0, vue_1.h)('p', { class: 'yk-block-description' }, p.description), (0, vue_1.h)('div', { class: 'yk-block-actions' }, [p.actionLabel ? (0, vue_1.h)(index_js_1.YkButton, { onClick: () => emit('action', { action: 'primary', value: p.status }) }, () => p.actionLabel) : null, p.secondaryLabel ? (0, vue_1.h)(index_js_1.YkButton, { variant: 'outline', onClick: () => emit('action', { action: 'secondary', value: p.status }) }, () => p.secondaryLabel) : null])])]); } });

},{"vue":"vue","../../components/button/index.js":"packages/vue/src/components/button/index.js"}],
"packages/vue/src/templates/extended/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkPageTemplate = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../components/button/index.js");
const index_js_2 = require("../../components/input/index.js");
const index_js_3 = require("../../components/card/index.js");
exports.YkPageTemplate = (0, vue_1.defineComponent)({ name: 'YkPageTemplate', inheritAttrs: false, props: { kind: { type: String, default: 'login' }, label: String, description: String, actionLabel: String, secondaryLabel: String, items: { type: Array, default: () => [] } }, emits: ['action'], setup(p, { attrs, emit }) { const fire = (action, value) => emit('action', { action, value }); return () => { const head = [(0, vue_1.h)('div', { class: 'yk-page-template__head' }, [(0, vue_1.h)('span', { class: 'yk-page-template__eyebrow' }, 'YUANKIT TEMPLATE'), (0, vue_1.h)('h1', {}, p.label || titles[p.kind] || '页面模板'), (0, vue_1.h)('p', {}, p.description || descriptions[p.kind] || '可配置的页面起点。')])]; if (p.kind === 'login' || p.kind === 'register')
        return (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-page-template', 'is-auth'] }), [...head, (0, vue_1.h)('form', { class: 'yk-page-template__form', onSubmit: e => { e.preventDefault(); fire('submit'); } }, [(0, vue_1.h)(index_js_2.YkInput, { label: '邮箱', type: 'email', placeholder: 'name@example.com' }), p.kind === 'register' ? (0, vue_1.h)(index_js_2.YkInput, { label: '昵称', placeholder: '你的昵称' }) : null, (0, vue_1.h)(index_js_2.YkInput, { label: '密码', type: 'password', placeholder: '••••••••' }), (0, vue_1.h)(index_js_1.YkButton, { type: 'submit', block: true }, () => p.actionLabel || (p.kind === 'register' ? '创建账户' : '登录')), (0, vue_1.h)(index_js_1.YkButton, { variant: 'ghost', block: true, onClick: () => fire('secondary') }, () => p.secondaryLabel || (p.kind === 'register' ? '已有账户？登录' : '创建账户'))])]); if (p.kind === 'dashboard')
        return (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-page-template', 'is-dashboard'] }), [(0, vue_1.h)('aside', {}, [(0, vue_1.h)('strong', {}, 'YuanKit'), ...(p.items.length ? p.items : [{ label: '总览' }, { label: '资产' }, { label: '项目' }, { label: '设置' }]).map(x => (0, vue_1.h)('button', { type: 'button' }, x.label))]), (0, vue_1.h)('main', {}, [...head, (0, vue_1.h)('div', { class: 'yk-page-template__cards' }, ['今日访问', '保存方案', '组件覆盖'].map((x, i) => (0, vue_1.h)(index_js_3.YkCard, { title: x, description: ['12,860', '38', '74%'][i] }))), (0, vue_1.h)('div', { class: 'yk-page-template__chart' }, 'DATA VISUALIZATION AREA')])]); if (p.kind === 'article')
        return (0, vue_1.h)('article', (0, vue_1.mergeProps)(attrs, { class: ['yk-page-template', 'is-article'] }), [...head, (0, vue_1.h)('div', { class: 'yk-page-template__prose' }, [(0, vue_1.h)('p', {}, '这是文章页面模板的正文区域，用于验证排版、阅读宽度、标题层级和操作区域。'), (0, vue_1.h)('h2', {}, '保持正文节奏'), (0, vue_1.h)('p', {}, '实际内容由业务项目传入；这里不绑定 CMS，也不加载第三方文章。'), (0, vue_1.h)('blockquote', {}, '组件库不仅服务按钮，也应该服务内容页面。')])]); if (p.kind === 'settings')
        return (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-page-template', 'is-settings'] }), [...head, (0, vue_1.h)(index_js_3.YkCard, { title: '个人偏好', description: '保存项目级界面选项。' }, { default: () => (0, vue_1.h)('div', { class: 'yk-page-template__form' }, [(0, vue_1.h)(index_js_2.YkInput, { label: '显示名称', defaultValue: 'YuanKit User' }), (0, vue_1.h)(index_js_2.YkInput, { label: '通知邮箱', defaultValue: 'hello@example.com' }), (0, vue_1.h)(index_js_1.YkButton, { onClick: () => fire('save') }, () => p.actionLabel || '保存修改')]) })]); if (p.kind === 'onboarding')
        return (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-page-template', 'is-onboarding'] }), [...head, (0, vue_1.h)('div', { class: 'yk-onboarding-steps' }, ['选择风格', '配置品牌', '导出项目'].map((x, i) => (0, vue_1.h)('div', { class: { 'is-active': i === 0 } }, [(0, vue_1.h)('span', {}, i + 1), (0, vue_1.h)('strong', {}, x)]))), (0, vue_1.h)('div', { class: 'yk-page-template__actions' }, [(0, vue_1.h)(index_js_1.YkButton, { onClick: () => fire('next') }, () => p.actionLabel || '继续'), (0, vue_1.h)(index_js_1.YkButton, { variant: 'ghost', onClick: () => fire('skip') }, () => p.secondaryLabel || '稍后设置')])]); if (p.kind === 'success')
        return (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-page-template', 'is-success'] }), [(0, vue_1.h)('div', { class: 'yk-success-mark', 'aria-hidden': 'true' }, '✓'), ...head, (0, vue_1.h)('div', { class: 'yk-page-template__actions' }, [(0, vue_1.h)(index_js_1.YkButton, { onClick: () => fire('primary') }, () => p.actionLabel || '查看结果'), (0, vue_1.h)(index_js_1.YkButton, { variant: 'outline', onClick: () => fire('secondary') }, () => p.secondaryLabel || '返回首页')])]); if (p.kind === 'pricing')
        return (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: ['yk-page-template', 'is-pricing'] }), [...head, (0, vue_1.h)('div', { class: 'yk-page-template__pricing' }, ['基础', '团队', '企业'].map((x, i) => (0, vue_1.h)(index_js_3.YkCard, { title: x, description: ['个人项目', '协作团队', '组织级治理'][i] }, { default: () => (0, vue_1.h)('strong', { class: 'yk-page-price' }, i === 0 ? '¥0' : i === 1 ? '¥99' : '定制'), footer: () => (0, vue_1.h)(index_js_1.YkButton, { variant: i === 1 ? 'primary' : 'outline', onClick: () => fire('select', x) }, () => '选择') })))]); return (0, vue_1.h)('section', (0, vue_1.mergeProps)(attrs, { class: 'yk-page-template' }), head); }; } });
const titles = { login: '欢迎回来', register: '创建你的账户', dashboard: '工作台总览', article: '把设计写成内容', settings: '项目设置', onboarding: '开始配置你的设计系统', success: '操作已完成', pricing: '简单、清晰的方案' };
const descriptions = { login: '继续进入你的设计资产库。', register: '创建账户并保存你的组件与页面方案。', dashboard: '组件、方案与使用情况集中查看。', article: '内容页面也使用同一套字体、间距与颜色规则。', settings: '在一处维护个人与项目偏好。', onboarding: '三步完成第一套可复用设计配置。', success: '结果已经保存，可以继续下一步。', pricing: '用统一组件表达不同商业方案。' };

},{"vue":"vue","../../components/button/index.js":"packages/vue/src/components/button/index.js","../../components/input/index.js":"packages/vue/src/components/input/index.js","../../components/card/index.js":"packages/vue/src/components/card/index.js"}],
"packages/vue/src/templates/ai-chat-page/index.js":[function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YkAIChatPage = void 0;
const vue_1 = require("vue");
const index_js_1 = require("../../ai/ai-conversation/index.js");
const index_js_2 = require("../../ai/ai-prompt-input/index.js");
const index_js_3 = require("../../ai/ai-suggestions/index.js");
const index_js_4 = require("../../ai/ai-artifact/index.js");
const index_js_5 = require("../../ai/ai-usage/index.js");
exports.YkAIChatPage = (0, vue_1.defineComponent)({ name: 'YkAIChatPage', props: { title: { type: String, default: '让想法，成为下一步。' }, description: { type: String, default: '从一个清晰的问题开始，整理思路、检索资料或生成内容。' }, messages: { type: Array, default: () => [] }, modelValue: { type: String, default: '' }, busy: Boolean, model: String, models: { type: Array, default: () => [] }, suggestions: { type: Array, default: () => [] }, variant: { type: String, default: 'chat' }, appearance: { type: String, default: 'plain' }, showAvatar: { type: Boolean, default: true }, history: { type: Array, default: () => [] }, activeConversation: String, notice: { type: String, default: '界面组件 · 模型服务由应用接入' }, artifactTitle: { type: String, default: '草稿产物' }, artifactContent: { type: String, default: '' }, height: { type: Number, default: 330 }, sendKey: { type: String, default: 'enter' } }, emits: ['update:modelValue', 'update:model', 'submit', 'stop', 'new', 'selectConversation', 'suggestion', 'feedback', 'retry'], setup(p, { emit, slots }) {
        return () => (0, vue_1.h)('section', { class: ['yk-ai-page', 'is-' + p.variant] }, [
            (0, vue_1.h)('div', { class: 'yk-ai-page__layout' }, [
                (0, vue_1.h)('aside', { class: 'yk-ai-page__rail' }, [(0, vue_1.h)('div', { class: 'yk-ai-page__brand' }, [(0, vue_1.h)('span', { 'aria-hidden': 'true' }, '✦'), 'YuanKit AI']), (0, vue_1.h)('button', { type: 'button', class: 'yk-ai-page__new', disabled: p.busy, onClick: () => emit('new') }, '+ 新建对话'), (0, vue_1.h)('small', {}, '工作空间'), (0, vue_1.h)('span', { class: 'yk-ai-page__nav is-active' }, '◎  对话与创作'), (0, vue_1.h)('span', { class: 'yk-ai-page__nav' }, '▧  当前上下文'), (0, vue_1.h)('small', {}, '最近对话'), ...p.history.map(item => (0, vue_1.h)('button', { type: 'button', key: item.id, class: 'yk-ai-page__history', disabled: p.busy, 'aria-current': p.activeConversation === item.id ? 'page' : undefined, onClick: () => emit('selectConversation', item.id) }, item.title)), (0, vue_1.h)('div', { class: 'yk-ai-page__rail-footer' }, [(0, vue_1.h)('span', { 'aria-hidden': 'true' }, 'Y'), (0, vue_1.h)('div', {}, [(0, vue_1.h)('strong', {}, '我的设计工作空间'), (0, vue_1.h)('small', {}, 'Vue 原生 · 自有组件')])])]),
                (0, vue_1.h)('section', { class: 'yk-ai-page__main' }, [
                    (0, vue_1.h)('header', { class: 'yk-ai-page__topbar' }, [(0, vue_1.h)('span', {}, p.variant === 'workspace' ? '创作工作台' : 'AI 对话'), (0, vue_1.h)('span', { class: 'yk-ai-page__notice' }, p.notice), (0, vue_1.h)('button', { type: 'button', class: 'yk-ai-page__mobile-new', disabled: p.busy, onClick: () => emit('new') }, '+ 新建')]),
                    !p.messages.length ? (0, vue_1.h)('div', { class: 'yk-ai-page__intro' }, [(0, vue_1.h)('div', { class: 'yk-ai-page__spark', 'aria-hidden': 'true' }, '✦'), (0, vue_1.h)('span', { class: 'yk-ai-page__eyebrow' }, 'THINK / CREATE / REFINE'), (0, vue_1.h)('h2', {}, p.title), (0, vue_1.h)('p', {}, p.description), (0, vue_1.h)(index_js_3.YkAISuggestions, { items: p.suggestions, layout: 'cards', onSelect: item => emit('suggestion', item) })]) : (0, vue_1.h)(index_js_1.YkAIConversation, { messages: p.messages, height: p.height, streaming: p.busy, appearance: p.appearance, showAvatar: p.showAvatar, onFeedback: v => emit('feedback', v), onRetry: id => emit('retry', id) }),
                    slots.context?.(), (0, vue_1.h)('div', { class: 'yk-ai-page__input' }, [(0, vue_1.h)(index_js_2.YkAIPromptInput, { modelValue: p.modelValue, busy: p.busy, model: p.model, models: p.models, sendKey: p.sendKey, 'onUpdate:modelValue': v => emit('update:modelValue', v), 'onUpdate:model': v => emit('update:model', v), onSubmit: v => emit('submit', v), onStop: () => emit('stop') }), (0, vue_1.h)('small', {}, '输出需要核对。不会因为展示了工具状态或引用，就代表已经执行或验证。')])
                ]),
                p.variant === 'workspace' ? (0, vue_1.h)('aside', { class: 'yk-ai-page__artifact' }, slots.artifact?.() || (0, vue_1.h)(index_js_4.YkAIArtifact, { title: p.artifactTitle, content: p.artifactContent, language: 'markdown' })) : null
            ])
        ]);
    } });

},{"vue":"vue","../../ai/ai-conversation/index.js":"packages/vue/src/ai/ai-conversation/index.js","../../ai/ai-prompt-input/index.js":"packages/vue/src/ai/ai-prompt-input/index.js","../../ai/ai-suggestions/index.js":"packages/vue/src/ai/ai-suggestions/index.js","../../ai/ai-artifact/index.js":"packages/vue/src/ai/ai-artifact/index.js","../../ai/ai-usage/index.js":"packages/vue/src/ai/ai-usage/index.js"}]};
const cache={};
function load(id){if(id==='vue')return global.Vue;if(cache[id])return cache[id].exports;const spec=modules[id];if(!spec)throw Error('Unknown module '+id);const module=cache[id]={exports:{}};spec[0](module,module.exports,key=>load(spec[1][key]));return module.exports;}
global.YuanKit=load("packages/vue/src/index.js");
})(globalThis);
