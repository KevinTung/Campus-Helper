module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1571651193391, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.version = exports.install = void 0;

var _actionSheet = _interopRequireDefault(require("./action-sheet"));

exports.ActionSheet = _actionSheet.default;

var _addressEdit = _interopRequireDefault(require("./address-edit"));

exports.AddressEdit = _addressEdit.default;

var _addressList = _interopRequireDefault(require("./address-list"));

exports.AddressList = _addressList.default;

var _area = _interopRequireDefault(require("./area"));

exports.Area = _area.default;

var _button = _interopRequireDefault(require("./button"));

exports.Button = _button.default;

var _card = _interopRequireDefault(require("./card"));

exports.Card = _card.default;

var _cell = _interopRequireDefault(require("./cell"));

exports.Cell = _cell.default;

var _cellGroup = _interopRequireDefault(require("./cell-group"));

exports.CellGroup = _cellGroup.default;

var _checkbox = _interopRequireDefault(require("./checkbox"));

exports.Checkbox = _checkbox.default;

var _checkboxGroup = _interopRequireDefault(require("./checkbox-group"));

exports.CheckboxGroup = _checkboxGroup.default;

var _circle = _interopRequireDefault(require("./circle"));

exports.Circle = _circle.default;

var _col = _interopRequireDefault(require("./col"));

exports.Col = _col.default;

var _collapse = _interopRequireDefault(require("./collapse"));

exports.Collapse = _collapse.default;

var _collapseItem = _interopRequireDefault(require("./collapse-item"));

exports.CollapseItem = _collapseItem.default;

var _contactCard = _interopRequireDefault(require("./contact-card"));

exports.ContactCard = _contactCard.default;

var _contactEdit = _interopRequireDefault(require("./contact-edit"));

exports.ContactEdit = _contactEdit.default;

var _contactList = _interopRequireDefault(require("./contact-list"));

exports.ContactList = _contactList.default;

var _countDown = _interopRequireDefault(require("./count-down"));

exports.CountDown = _countDown.default;

var _coupon = _interopRequireDefault(require("./coupon"));

exports.Coupon = _coupon.default;

var _couponCell = _interopRequireDefault(require("./coupon-cell"));

exports.CouponCell = _couponCell.default;

var _couponList = _interopRequireDefault(require("./coupon-list"));

exports.CouponList = _couponList.default;

var _datetimePicker = _interopRequireDefault(require("./datetime-picker"));

exports.DatetimePicker = _datetimePicker.default;

var _dialog = _interopRequireDefault(require("./dialog"));

exports.Dialog = _dialog.default;

var _divider = _interopRequireDefault(require("./divider"));

exports.Divider = _divider.default;

var _dropdownItem = _interopRequireDefault(require("./dropdown-item"));

exports.DropdownItem = _dropdownItem.default;

var _dropdownMenu = _interopRequireDefault(require("./dropdown-menu"));

exports.DropdownMenu = _dropdownMenu.default;

var _field = _interopRequireDefault(require("./field"));

exports.Field = _field.default;

var _goodsAction = _interopRequireDefault(require("./goods-action"));

exports.GoodsAction = _goodsAction.default;

var _goodsActionButton = _interopRequireDefault(require("./goods-action-button"));

exports.GoodsActionButton = _goodsActionButton.default;

var _goodsActionIcon = _interopRequireDefault(require("./goods-action-icon"));

exports.GoodsActionIcon = _goodsActionIcon.default;

var _grid = _interopRequireDefault(require("./grid"));

exports.Grid = _grid.default;

var _gridItem = _interopRequireDefault(require("./grid-item"));

exports.GridItem = _gridItem.default;

var _icon = _interopRequireDefault(require("./icon"));

exports.Icon = _icon.default;

var _image = _interopRequireDefault(require("./image"));

exports.Image = _image.default;

var _imagePreview = _interopRequireDefault(require("./image-preview"));

exports.ImagePreview = _imagePreview.default;

var _indexAnchor = _interopRequireDefault(require("./index-anchor"));

exports.IndexAnchor = _indexAnchor.default;

var _indexBar = _interopRequireDefault(require("./index-bar"));

exports.IndexBar = _indexBar.default;

var _info = _interopRequireDefault(require("./info"));

exports.Info = _info.default;

var _lazyload = _interopRequireDefault(require("./lazyload"));

exports.Lazyload = _lazyload.default;

var _list = _interopRequireDefault(require("./list"));

exports.List = _list.default;

var _loading = _interopRequireDefault(require("./loading"));

exports.Loading = _loading.default;

var _locale = _interopRequireDefault(require("./locale"));

exports.Locale = _locale.default;

var _navBar = _interopRequireDefault(require("./nav-bar"));

exports.NavBar = _navBar.default;

var _noticeBar = _interopRequireDefault(require("./notice-bar"));

exports.NoticeBar = _noticeBar.default;

var _notify = _interopRequireDefault(require("./notify"));

exports.Notify = _notify.default;

var _numberKeyboard = _interopRequireDefault(require("./number-keyboard"));

exports.NumberKeyboard = _numberKeyboard.default;

var _overlay = _interopRequireDefault(require("./overlay"));

exports.Overlay = _overlay.default;

var _pagination = _interopRequireDefault(require("./pagination"));

exports.Pagination = _pagination.default;

var _panel = _interopRequireDefault(require("./panel"));

exports.Panel = _panel.default;

var _passwordInput = _interopRequireDefault(require("./password-input"));

exports.PasswordInput = _passwordInput.default;

var _picker = _interopRequireDefault(require("./picker"));

exports.Picker = _picker.default;

var _popup = _interopRequireDefault(require("./popup"));

exports.Popup = _popup.default;

var _progress = _interopRequireDefault(require("./progress"));

exports.Progress = _progress.default;

var _pullRefresh = _interopRequireDefault(require("./pull-refresh"));

exports.PullRefresh = _pullRefresh.default;

var _radio = _interopRequireDefault(require("./radio"));

exports.Radio = _radio.default;

var _radioGroup = _interopRequireDefault(require("./radio-group"));

exports.RadioGroup = _radioGroup.default;

var _rate = _interopRequireDefault(require("./rate"));

exports.Rate = _rate.default;

var _row = _interopRequireDefault(require("./row"));

exports.Row = _row.default;

var _search = _interopRequireDefault(require("./search"));

exports.Search = _search.default;

var _sidebar = _interopRequireDefault(require("./sidebar"));

exports.Sidebar = _sidebar.default;

var _sidebarItem = _interopRequireDefault(require("./sidebar-item"));

exports.SidebarItem = _sidebarItem.default;

var _skeleton = _interopRequireDefault(require("./skeleton"));

exports.Skeleton = _skeleton.default;

var _sku = _interopRequireDefault(require("./sku"));

exports.Sku = _sku.default;

var _slider = _interopRequireDefault(require("./slider"));

exports.Slider = _slider.default;

var _step = _interopRequireDefault(require("./step"));

exports.Step = _step.default;

var _stepper = _interopRequireDefault(require("./stepper"));

exports.Stepper = _stepper.default;

var _steps = _interopRequireDefault(require("./steps"));

exports.Steps = _steps.default;

var _sticky = _interopRequireDefault(require("./sticky"));

exports.Sticky = _sticky.default;

var _submitBar = _interopRequireDefault(require("./submit-bar"));

exports.SubmitBar = _submitBar.default;

var _swipe = _interopRequireDefault(require("./swipe"));

exports.Swipe = _swipe.default;

var _swipeCell = _interopRequireDefault(require("./swipe-cell"));

exports.SwipeCell = _swipeCell.default;

var _swipeItem = _interopRequireDefault(require("./swipe-item"));

exports.SwipeItem = _swipeItem.default;

var _switch = _interopRequireDefault(require("./switch"));

exports.Switch = _switch.default;

var _switchCell = _interopRequireDefault(require("./switch-cell"));

exports.SwitchCell = _switchCell.default;

var _tab = _interopRequireDefault(require("./tab"));

exports.Tab = _tab.default;

var _tabbar = _interopRequireDefault(require("./tabbar"));

exports.Tabbar = _tabbar.default;

var _tabbarItem = _interopRequireDefault(require("./tabbar-item"));

exports.TabbarItem = _tabbarItem.default;

var _tabs = _interopRequireDefault(require("./tabs"));

exports.Tabs = _tabs.default;

var _tag = _interopRequireDefault(require("./tag"));

exports.Tag = _tag.default;

var _toast = _interopRequireDefault(require("./toast"));

exports.Toast = _toast.default;

var _treeSelect = _interopRequireDefault(require("./tree-select"));

exports.TreeSelect = _treeSelect.default;

var _uploader = _interopRequireDefault(require("./uploader"));

exports.Uploader = _uploader.default;
// This file is auto generated by build/build-entry.js
var version = '2.2.7';
exports.version = version;
var components = [_actionSheet.default, _addressEdit.default, _addressList.default, _area.default, _button.default, _card.default, _cell.default, _cellGroup.default, _checkbox.default, _checkboxGroup.default, _circle.default, _col.default, _collapse.default, _collapseItem.default, _contactCard.default, _contactEdit.default, _contactList.default, _countDown.default, _coupon.default, _couponCell.default, _couponList.default, _datetimePicker.default, _dialog.default, _divider.default, _dropdownItem.default, _dropdownMenu.default, _field.default, _goodsAction.default, _goodsActionButton.default, _goodsActionIcon.default, _grid.default, _gridItem.default, _icon.default, _image.default, _imagePreview.default, _indexAnchor.default, _indexBar.default, _info.default, _list.default, _loading.default, _navBar.default, _noticeBar.default, _notify.default, _numberKeyboard.default, _overlay.default, _pagination.default, _panel.default, _passwordInput.default, _picker.default, _popup.default, _progress.default, _pullRefresh.default, _radio.default, _radioGroup.default, _rate.default, _row.default, _search.default, _sidebar.default, _sidebarItem.default, _skeleton.default, _sku.default, _slider.default, _step.default, _stepper.default, _steps.default, _sticky.default, _submitBar.default, _swipe.default, _swipeCell.default, _swipeItem.default, _switch.default, _switchCell.default, _tab.default, _tabbar.default, _tabbarItem.default, _tabs.default, _tag.default, _toast.default, _treeSelect.default, _uploader.default];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


exports.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version
};
exports.default = _default;
}, function(modId) {var map = {"./action-sheet":1571651193392,"./address-edit":1571651193420,"./address-list":1571651193445,"./area":1571651193422,"./button":1571651193436,"./card":1571651193451,"./cell":1571651193429,"./cell-group":1571651193453,"./checkbox":1571651193454,"./checkbox-group":1571651193455,"./circle":1571651193456,"./col":1571651193458,"./collapse":1571651193459,"./collapse-item":1571651193460,"./contact-card":1571651193461,"./contact-edit":1571651193462,"./contact-list":1571651193463,"./count-down":1571651193464,"./coupon":1571651193466,"./coupon-cell":1571651193467,"./coupon-list":1571651193468,"./datetime-picker":1571651193476,"./dialog":1571651193437,"./divider":1571651193482,"./dropdown-item":1571651193483,"./dropdown-menu":1571651193484,"./field":1571651193428,"./goods-action":1571651193486,"./goods-action-button":1571651193487,"./goods-action-icon":1571651193488,"./grid":1571651193489,"./grid-item":1571651193490,"./icon":1571651193415,"./image":1571651193417,"./image-preview":1571651193491,"./index-anchor":1571651193495,"./index-bar":1571651193496,"./info":1571651193416,"./lazyload":1571651193497,"./list":1571651193498,"./loading":1571651193419,"./locale":1571651193397,"./nav-bar":1571651193499,"./notice-bar":1571651193500,"./notify":1571651193501,"./number-keyboard":1571651193503,"./overlay":1571651193413,"./pagination":1571651193505,"./panel":1571651193506,"./password-input":1571651193507,"./picker":1571651193423,"./popup":1571651193418,"./progress":1571651193508,"./pull-refresh":1571651193509,"./radio":1571651193449,"./radio-group":1571651193446,"./rate":1571651193510,"./row":1571651193511,"./search":1571651193512,"./sidebar":1571651193513,"./sidebar-item":1571651193514,"./skeleton":1571651193515,"./sku":1571651193516,"./slider":1571651193533,"./step":1571651193534,"./stepper":1571651193526,"./steps":1571651193535,"./sticky":1571651193475,"./submit-bar":1571651193536,"./swipe":1571651193493,"./swipe-cell":1571651193537,"./swipe-item":1571651193494,"./switch":1571651193443,"./switch-cell":1571651193442,"./tab":1571651193469,"./tabbar":1571651193538,"./tabbar-item":1571651193539,"./tabs":1571651193470,"./tag":1571651193452,"./toast":1571651193434,"./tree-select":1571651193540,"./uploader":1571651193530}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193392, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _popup = require("../mixins/popup");

var _icon = _interopRequireDefault(require("../icon"));

var _popup2 = _interopRequireDefault(require("../popup"));

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('action-sheet'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function ActionSheet(h, props, slots, ctx) {
  var title = props.title,
      cancelText = props.cancelText;

  function onCancel() {
    (0, _functional.emit)(ctx, 'input', false);
    (0, _functional.emit)(ctx, 'cancel');
  }

  function Header() {
    if (title) {
      return h("div", {
        "class": [bem('header'), _constant.BORDER_BOTTOM]
      }, [title, h(_icon.default, {
        "attrs": {
          "name": "close"
        },
        "class": bem('close'),
        "on": {
          "click": onCancel
        }
      })]);
    }
  }

  function Content() {
    if (slots.default) {
      return h("div", {
        "class": bem('content')
      }, [slots.default()]);
    }
  }

  function Option(item, index) {
    var disabled = item.disabled || item.loading;

    function onClickOption(event) {
      event.stopPropagation();

      if (item.disabled || item.loading) {
        return;
      }

      if (item.callback) {
        item.callback(item);
      }

      (0, _functional.emit)(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        (0, _functional.emit)(ctx, 'input', false);
      }
    }

    function OptionContent() {
      if (item.loading) {
        return h(_loading.default, {
          "attrs": {
            "size": "20px"
          }
        });
      }

      return [h("span", {
        "class": bem('name')
      }, [item.name]), item.subname && h("span", {
        "class": bem('subname')
      }, [item.subname])];
    }

    return h("button", {
      "class": [bem('item', {
        disabled: disabled
      }), item.className, _constant.BORDER_TOP],
      "style": {
        color: item.color
      },
      "on": {
        "click": onClickOption
      }
    }, [OptionContent()]);
  }

  function CancelText() {
    if (cancelText) {
      return h("button", {
        "class": bem('cancel'),
        "on": {
          "click": onCancel
        }
      }, [cancelText]);
    }
  }

  return h(_popup2.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "attrs": {
      "position": "bottom",
      "round": props.round,
      "value": props.value,
      "overlay": props.overlay,
      "duration": props.duration,
      "lazyRender": props.lazyRender,
      "lockScroll": props.lockScroll,
      "getContainer": props.getContainer,
      "closeOnClickOverlay": props.closeOnClickOverlay,
      "safeAreaInsetBottom": props.safeAreaInsetBottom
    }
  }, (0, _functional.inherit)(ctx, true)]), [Header(), props.actions && props.actions.map(Option), Content(), CancelText()]);
}

ActionSheet.props = (0, _extends2.default)({}, _popup.PopupMixin.props, {
  title: String,
  actions: Array,
  duration: Number,
  cancelText: String,
  getContainer: [String, Function],
  closeOnClickAction: Boolean,
  round: {
    type: Boolean,
    default: true
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
});

var _default = createComponent(ActionSheet);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/constant":1571651193406,"../mixins/popup":1571651193407,"../icon":1571651193415,"../popup":1571651193418,"../loading":1571651193419}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193393, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.noop = noop;
exports.isDef = isDef;
exports.isObj = isObj;
exports.get = get;
exports.isServer = exports.addUnit = exports.createNamespace = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _create = require("./create");

exports.createNamespace = _create.createNamespace;

var _unit = require("./format/unit");

exports.addUnit = _unit.addUnit;
var isServer = _vue.default.prototype.$isServer;
exports.isServer = isServer;

function noop() {}

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}
}, function(modId) { var map = {"./create":1571651193394,"./format/unit":1571651193403}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193394, function(require, module, exports) {


exports.__esModule = true;
exports.createNamespace = createNamespace;

var _bem = require("./bem");

var _component = require("./component");

var _i18n = require("./i18n");

function createNamespace(name) {
  name = 'van-' + name;
  return [(0, _component.createComponent)(name), (0, _bem.createBEM)(name), (0, _i18n.createI18N)(name)];
}
}, function(modId) { var map = {"./bem":1571651193395,"./component":1571651193396,"./i18n":1571651193402}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193395, function(require, module, exports) {


exports.__esModule = true;
exports.createBEM = createBEM;

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193396, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.unifySlots = unifySlots;
exports.createComponent = createComponent;

require("../../locale");

var _string = require("../format/string");

var _slots = require("../../mixins/slots");

var _vue = _interopRequireDefault(require("vue"));

/**
 * Create a basic component with common options
 */
function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component((0, _string.camelize)("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3


function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(_slots.SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}
}, function(modId) { var map = {"../../locale":1571651193397,"../format/string":1571651193400,"../../mixins/slots":1571651193401}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193397, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _deepAssign = require("../utils/deep-assign");

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var proto = _vue.default.prototype;
var defineReactive = _vue.default.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': _zhCN.default
});
var _default = {
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.deepAssign)(proto.$vantMessages, messages);
  }
};
exports.default = _default;
}, function(modId) { var map = {"../utils/deep-assign":1571651193398,"./lang/zh-CN":1571651193399}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193398, function(require, module, exports) {


exports.__esModule = true;
exports.deepAssign = deepAssign;

var _ = require(".");

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _.isDef)(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _.isObj)(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}
}, function(modId) { var map = {".":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193399, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
};
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193400, function(require, module, exports) {


exports.__esModule = true;
exports.camelize = camelize;
exports.padZero = padZero;
var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193401, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SlotsMixin = void 0;

var _vue = _interopRequireDefault(require("vue"));

/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
var SlotsMixin = _vue.default.extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});

exports.SlotsMixin = SlotsMixin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193402, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createI18N = createI18N;

var _ = require("..");

var _string = require("../format/string");

var _locale = _interopRequireDefault(require("../../locale"));

function createI18N(name) {
  var prefix = (0, _string.camelize)(name) + '.';
  return function (path) {
    var message = (0, _.get)(_locale.default.messages(), prefix + path) || (0, _.get)(_locale.default.messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}
}, function(modId) { var map = {"..":1571651193393,"../format/string":1571651193400,"../../locale":1571651193397}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193403, function(require, module, exports) {


exports.__esModule = true;
exports.addUnit = addUnit;

var _ = require("..");

var _number = require("../validate/number");

function addUnit(value) {
  if (!(0, _.isDef)(value)) {
    return undefined;
  }

  value = String(value);
  return (0, _number.isNumber)(value) ? value + "px" : value;
}
}, function(modId) { var map = {"..":1571651193393,"../validate/number":1571651193404}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193404, function(require, module, exports) {


exports.__esModule = true;
exports.isNumber = isNumber;
exports.isNaN = isNaN;

function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}

function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  } // eslint-disable-next-line no-self-compare


  return value !== value;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193405, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.inherit = inherit;
exports.emit = emit;
exports.mount = mount;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};
    (0, _extends2.default)(result.on, context.data.on);
  }

  return result;
} // emit event


function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component


function mount(Component, data) {
  var instance = new _vue.default({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, (0, _extends2.default)({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193406, function(require, module, exports) {


exports.__esModule = true;
exports.BORDER_UNSET_TOP_BOTTOM = exports.BORDER_TOP_BOTTOM = exports.BORDER_SURROUND = exports.BORDER_BOTTOM = exports.BORDER_RIGHT = exports.BORDER_LEFT = exports.BORDER_TOP = exports.BORDER = exports.GRAY_DARK = exports.GRAY = exports.WHITE = exports.GREEN = exports.BLUE = exports.RED = void 0;
// color
var RED = '#ee0a24';
exports.RED = RED;
var BLUE = '#1989fa';
exports.BLUE = BLUE;
var GREEN = '#07c160';
exports.GREEN = GREEN;
var WHITE = '#fff';
exports.WHITE = WHITE;
var GRAY = '#c9c9c9';
exports.GRAY = GRAY;
var GRAY_DARK = '#969799'; // border

exports.GRAY_DARK = GRAY_DARK;
var BORDER = 'van-hairline';
exports.BORDER = BORDER;
var BORDER_TOP = BORDER + "--top";
exports.BORDER_TOP = BORDER_TOP;
var BORDER_LEFT = BORDER + "--left";
exports.BORDER_LEFT = BORDER_LEFT;
var BORDER_RIGHT = BORDER + "--right";
exports.BORDER_RIGHT = BORDER_RIGHT;
var BORDER_BOTTOM = BORDER + "--bottom";
exports.BORDER_BOTTOM = BORDER_BOTTOM;
var BORDER_SURROUND = BORDER + "--surround";
exports.BORDER_SURROUND = BORDER_SURROUND;
var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";
exports.BORDER_TOP_BOTTOM = BORDER_TOP_BOTTOM;
var BORDER_UNSET_TOP_BOTTOM = BORDER + "-unset--top-bottom";
exports.BORDER_UNSET_TOP_BOTTOM = BORDER_UNSET_TOP_BOTTOM;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193407, function(require, module, exports) {


exports.__esModule = true;
exports.PopupMixin = void 0;

var _context = require("./context");

var _touch = require("../touch");

var _portal = require("../portal");

var _event = require("../../utils/dom/event");

var _overlay = require("./overlay");

var _scroll = require("../../utils/dom/scroll");

var PopupMixin = {
  mixins: [_touch.TouchMixin, (0, _portal.PortalMixin)({
    afterPortal: function afterPortal() {
      if (this.overlay) {
        (0, _overlay.updateOverlay)();
      }
    }
  })],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },
    overlay: 'renderOverlay'
  },
  mounted: function mounted() {
    if (this.value) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated: function activated() {
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        _context.context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        (0, _event.on)(document, 'touchstart', this.touchStart);
        (0, _event.on)(document, 'touchmove', this.onTouchMove);

        if (!_context.context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        _context.context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        _context.context.lockCount--;
        (0, _event.off)(document, 'touchstart', this.touchStart);
        (0, _event.off)(document, 'touchmove', this.onTouchMove);

        if (!_context.context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      (0, _overlay.closeOverlay)(this);
      this.$emit('input', false);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = (0, _scroll.getScrollEventTarget)(event.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        (0, _event.preventDefault)(event, true);
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.$isServer || !this.value) {
        return;
      }

      this.$nextTick(function () {
        _this.updateZIndex(_this.overlay ? 1 : 0);

        if (_this.overlay) {
          (0, _overlay.openOverlay)(_this, {
            zIndex: _context.context.zIndex++,
            duration: _this.duration,
            className: _this.overlayClass,
            customStyle: _this.overlayStyle
          });
        } else {
          (0, _overlay.closeOverlay)(_this);
        }
      });
    },
    updateZIndex: function updateZIndex(value) {
      if (value === void 0) {
        value = 0;
      }

      this.$el.style.zIndex = ++_context.context.zIndex + value;
    }
  }
};
exports.PopupMixin = PopupMixin;
}, function(modId) { var map = {"./context":1571651193408,"../touch":1571651193409,"../portal":1571651193410,"../../utils/dom/event":1571651193411,"./overlay":1571651193412,"../../utils/dom/scroll":1571651193414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193408, function(require, module, exports) {


exports.__esModule = true;
exports.context = void 0;
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};
exports.context = context;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193409, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TouchMixin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = _vue.default.extend({
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});

exports.TouchMixin = TouchMixin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193410, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PortalMixin = PortalMixin;

var _vue = _interopRequireDefault(require("vue"));

function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_ref) {
  var ref = _ref.ref,
      afterPortal = _ref.afterPortal;
  return _vue.default.extend({
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: 'portal'
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var el = ref ? this.$refs[ref] : this.$el;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== el.parentNode) {
          container.appendChild(el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  });
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193411, function(require, module, exports) {


exports.__esModule = true;
exports.on = on;
exports.off = off;
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
exports.supportsPassive = void 0;

var _ = require("..");

// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;
exports.supportsPassive = supportsPassive;

if (!_.isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        exports.supportsPassive = supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!_.isServer) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}

function off(target, event, handler) {
  if (!_.isServer) {
    target.removeEventListener(event, handler);
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}
}, function(modId) { var map = {"..":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193412, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateOverlay = updateOverlay;
exports.openOverlay = openOverlay;
exports.closeOverlay = closeOverlay;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _overlay = _interopRequireDefault(require("../../overlay"));

var _context = require("./context");

var _functional = require("../../utils/functional");

var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (_context.context.top) {
    var vm = _context.context.top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function updateOverlay() {
  if (!overlay) {
    overlay = (0, _functional.mount)(_overlay.default, {
      on: {
        click: onClickOverlay
      }
    });
  }

  if (_context.context.top) {
    var _context$top = _context.context.top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    } else {
      document.body.appendChild(overlay.$el);
    }

    (0, _extends2.default)(overlay, defaultConfig, config, {
      show: true
    });
  } else {
    overlay.show = false;
  }
}

function openOverlay(vm, config) {
  if (!_context.context.stack.some(function (item) {
    return item.vm === vm;
  })) {
    _context.context.stack.push({
      vm: vm,
      config: config
    });

    updateOverlay();
  }
}

function closeOverlay(vm) {
  var stack = _context.context.stack;

  if (stack.length) {
    if (_context.context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      _context.context.stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}
}, function(modId) { var map = {"../../overlay":1571651193413,"./context":1571651193408,"../../utils/functional":1571651193405}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193413, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _event = require("../utils/dom/event");

var _createNamespace = (0, _utils.createNamespace)('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  (0, _event.preventDefault)(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = (0, _extends2.default)({
    zIndex: props.zIndex
  }, props.customStyle);

  if ((0, _utils.isDef)(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default()])]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: Object,
  zIndex: {
    type: [Number, String],
    default: 1
  }
};

var _default = createComponent(Overlay);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/dom/event":1571651193411}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193414, function(require, module, exports) {


exports.__esModule = true;
exports.getScrollEventTarget = getScrollEventTarget;
exports.getScrollTop = getScrollTop;
exports.setScrollTop = setScrollTop;
exports.getRootScrollTop = getRootScrollTop;
exports.setRootScrollTop = setRootScrollTop;
exports.getElementTop = getElementTop;
exports.getVisibleHeight = getVisibleHeight;
// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
var overflowScrollReg = /scroll|auto/i;

function getScrollEventTarget(element, rootParent) {
  if (rootParent === void 0) {
    rootParent = window;
  }

  var node = element;

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== rootParent) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
          htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return rootParent;
}

function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}

function setScrollTop(element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
}

function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top


function getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getRootScrollTop();
}

function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193415, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _info = _interopRequireDefault(require("../info"));

var _image = _interopRequireDefault(require("../image"));

var _createNamespace = (0, _utils.createNamespace)('icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(h, props, slots, ctx) {
  var imageIcon = isImage(props.name);
  return h(props.tag, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + props.name],
    "style": {
      color: props.color,
      fontSize: (0, _utils.addUnit)(props.size)
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default(), imageIcon && h(_image.default, {
    "class": bem('image'),
    "attrs": {
      "fit": "contain",
      "src": props.name,
      "showLoading": false
    }
  }), h(_info.default, {
    "attrs": {
      "dot": props.dot,
      "info": props.info
    }
  })]);
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};

var _default = createComponent(Icon);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../info":1571651193416,"../image":1571651193417}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193416, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _createNamespace = (0, _utils.createNamespace)('info'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = (0, _utils.isDef)(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      dot: dot
    })
  }, (0, _functional.inherit)(ctx, true)]), [dot ? '' : props.info]);
}

Info.props = {
  dot: Boolean,
  info: [Number, String]
};

var _default = createComponent(Info);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193417, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('image'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if ((0, _utils.isDef)(this.width)) {
        style.width = (0, _utils.addUnit)(this.width);
      }

      if ((0, _utils.isDef)(this.height)) {
        style.height = (0, _utils.addUnit)(this.height);
      }

      if ((0, _utils.isDef)(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = (0, _utils.addUnit)(this.radius);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    renderPlaceholder: function renderPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": bem('loading')
        }, [this.slots('loading') || h(_icon.default, {
          "attrs": {
            "name": "photo-o",
            "size": "22"
          }
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": bem('error')
        }, [this.slots('error') || h(_icon.default, {
          "attrs": {
            "name": "warning-o",
            "size": "22"
          }
        })]);
      }
    },
    renderImage: function renderImage() {
      var h = this.$createElement;
      var imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", (0, _babelHelperVueJsxMergeProps.default)([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", (0, _babelHelperVueJsxMergeProps.default)([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.renderImage(), this.renderPlaceholder()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193418, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _popup = require("../mixins/popup");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('popup'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [_popup.PopupMixin],
  props: {
    round: Boolean,
    duration: Number,
    closeable: Boolean,
    transition: String,
    safeAreaInsetBottom: Boolean,
    closeIcon: {
      type: String,
      default: 'cross'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    },
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var createEmitter = function createEmitter(eventName) {
      return function (event) {
        return _this.$emit(eventName, event);
      };
    };

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },
  render: function render() {
    var _bem;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var round = this.round,
        position = this.position,
        duration = this.duration;
    var transitionName = this.transition || (position === 'center' ? 'van-fade' : "van-popup-slide-" + position);
    var style = {};

    if ((0, _utils.isDef)(duration)) {
      style.transitionDuration = duration + "s";
    }

    return h("transition", {
      "attrs": {
        "name": transitionName
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "style": style,
      "class": bem((_bem = {
        round: round
      }, _bem[position] = position, _bem['safe-area-inset-bottom'] = this.safeAreaInsetBottom, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots(), this.closeable && h(_icon.default, {
      "attrs": {
        "role": "button",
        "tabindex": "0",
        "name": this.closeIcon
      },
      "class": bem('close-icon', this.closeIconPosition),
      "on": {
        "click": this.close
      }
    })])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/popup":1571651193407,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193419, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _functional = require("../utils/functional");

var _createNamespace = (0, _utils.createNamespace)('loading'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: (0, _utils.addUnit)(props.textSize)
    };
    return h("span", {
      "class": bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = (0, _utils.addUnit)(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem([type, {
      vertical: props.vertical
    }])
  }, (0, _functional.inherit)(ctx, true)]), [h("span", {
    "class": bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular'
  },
  color: {
    type: String,
    default: _constant.GRAY
  }
};

var _default = createComponent(Loading);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../utils/functional":1571651193405}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193420, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _mobile = require("../utils/validate/mobile");

var _area = _interopRequireDefault(require("../area"));

var _field = _interopRequireDefault(require("../field"));

var _popup = _interopRequireDefault(require("../popup"));

var _toast = _interopRequireDefault(require("../toast"));

var _button = _interopRequireDefault(require("../button"));

var _dialog = _interopRequireDefault(require("../dialog"));

var _Detail = _interopRequireDefault(require("./Detail"));

var _switchCell = _interopRequireDefault(require("../switch-cell"));

var _createNamespace = (0, _utils.createNamespace)('address-edit'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};

function isPostal(value) {
  return /^\d{6}$/.test(value);
}

var _default2 = createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    detailMaxlength: {
      type: Number,
      default: 200
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return (0, _extends2.default)({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      default: _mobile.isMobile
    },
    postalValidator: {
      type: Function,
      default: isPostal
    },
    areaColumnsPlaceholder: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return (0, _utils.isObj)(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = (0, _extends2.default)({}, defaultData, {}, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        (0, _extends2.default)(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast.default)(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');

        case 'areaCode':
          return value ? '' : t('areaEmpty');

        case 'addressDetail':
          return value ? '' : t('addressEmpty');

        case 'postalCode':
          return value && !this.postalValidator(value) ? t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog.default.confirm({
        title: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    onDetailBlur: function onDetailBlur() {
      var _this3 = this;

      // await for click search event
      setTimeout(function () {
        _this3.detailFocused = false;
      });
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo,
        searchResult = this.searchResult;

    var onFocus = function onFocus(name) {
      return function () {
        return _this4.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = searchResult && searchResult.length && this.detailFocused;
    return h("div", {
      "class": bem()
    }, [h(_field.default, {
      "attrs": {
        "clearable": true,
        "label": t('name'),
        "placeholder": t('namePlaceholder'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(_field.default, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telPlaceholder'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h(_field.default, {
      "directives": [{
        name: "show",
        value: this.showArea
      }],
      "attrs": {
        "readonly": true,
        "label": t('area'),
        "placeholder": t('areaPlaceholder'),
        "value": this.areaText
      },
      "on": {
        "click": function click() {
          _this4.showAreaPopup = true;
        }
      }
    }), h(_Detail.default, {
      "directives": [{
        name: "show",
        value: this.showDetail
      }],
      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "error": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "detailMaxlength": this.detailMaxlength,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult
      },
      "on": {
        "focus": onFocus('addressDetail'),
        "blur": this.onDetailBlur,
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this4.$emit('select-search', event);
        }
      }
    }), this.showPostal && h(_field.default, {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": t('postal'),
        "placeholder": t('postal'),
        "error": errorInfo.postalCode
      },
      "on": {
        "focus": onFocus('postalCode')
      },
      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          data.postalCode = $$v;
        }
      }
    }), this.slots(), this.showSetDefault && h(_switchCell.default, {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "title": t('defaultAddress')
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          data.isDefault = $$v;
        }
      }
    }), h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "class": bem('buttons')
    }, [h(_button.default, {
      "attrs": {
        "block": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || t('save')
      },
      "on": {
        "click": this.onSave
      }
    }), this.showDelete && h(_button.default, {
      "attrs": {
        "block": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || t('delete')
      },
      "on": {
        "click": this.onDelete
      }
    })]), h(_popup.default, {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body"
      },
      "model": {
        value: _this4.showAreaPopup,
        callback: function callback($$v) {
          _this4.showAreaPopup = $$v;
        }
      }
    }, [h(_area.default, {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList,
        "columnsPlaceholder": this.areaColumnsPlaceholder
      },
      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this4.showAreaPopup = false;
        }
      }
    })])]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/validate/mobile":1571651193421,"../area":1571651193422,"../field":1571651193428,"../popup":1571651193418,"../toast":1571651193434,"../button":1571651193436,"../dialog":1571651193437,"./Detail":1571651193441,"../switch-cell":1571651193442}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193421, function(require, module, exports) {


exports.__esModule = true;
exports.isMobile = isMobile;

function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193422, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _picker = _interopRequireDefault(require("../picker"));

var _shared = require("../picker/shared");

var _createNamespace = (0, _utils.createNamespace)('area'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var COLUMNSPLACEHOLDERCODE = '000000';

function isOverseaCode(code) {
  return code[0] === '9';
}

var _default2 = createComponent({
  props: (0, _extends2.default)({}, _shared.pickerProps, {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [Number, String],
      default: 3
    },
    isOverseaCode: {
      type: Function,
      default: isOverseaCode
    },
    columnsPlaceholder: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }),
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    },
    typeToColumnsPlaceholder: function typeToColumnsPlaceholder() {
      return {
        province: this.columnsPlaceholder[0] || '',
        city: this.columnsPlaceholder[1] || '',
        county: this.columnsPlaceholder[2] || ''
      };
    }
  },
  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: 'setValues'
    },
    columnsNum: function columnsNum() {
      var _this = this;

      this.$nextTick(function () {
        _this.setValues();
      });
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (this.isOverseaCode(code) && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      if (this.typeToColumnsPlaceholder[type] && result.length) {
        // set columns placeholder
        var codeFill = type === 'province' ? '' : type === 'city' ? COLUMNSPLACEHOLDERCODE.slice(2, 4) : COLUMNSPLACEHOLDERCODE.slice(4, 6);
        result.unshift({
          code: "" + code + codeFill,
          name: this.typeToColumnsPlaceholder[type]
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (this.isOverseaCode(code) && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    // parse output columns data
    parseOutputValues: function parseOutputValues(values) {
      var _this2 = this;

      return values.map(function (value, index) {
        if (value === void 0) {
          value = {};
        }

        value = JSON.parse(JSON.stringify(value));

        if (!value.code || value.name === _this2.columnsPlaceholder[index]) {
          value.code = '';
          value.name = '';
        }

        return value;
      });
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      var getValues = picker.getValues();
      getValues = this.parseOutputValues(getValues);
      this.$emit('change', picker, getValues, index);
    },
    onConfirm: function onConfirm(values, index) {
      values = this.parseOutputValues(values);
      this.setValues();
      this.$emit('confirm', values, index);
    },
    setValues: function setValues() {
      var code = this.code;

      if (!code) {
        if (this.columnsPlaceholder.length) {
          code = COLUMNSPLACEHOLDERCODE;
        } else if (Object.keys(this.county)[0]) {
          code = Object.keys(this.county)[0];
        } else {
          code = '';
        }
      }

      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00' && !this.isOverseaCode(code)) {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      area.code = values[values.length - 1].code;

      if (this.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    reset: function reset(code) {
      this.code = code || '';
      this.setValues();
    }
  },
  render: function render() {
    var h = arguments[0];
    var on = (0, _extends2.default)({}, this.$listeners, {
      change: this.onChange,
      confirm: this.onConfirm
    });
    return h(_picker.default, {
      "ref": "picker",
      "class": bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText
      },
      "on": (0, _extends2.default)({}, on)
    });
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../picker":1571651193423,"../picker/shared":1571651193425}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193423, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _event = require("../utils/dom/event");

var _deepClone = require("../utils/deep-clone");

var _shared = require("./shared");

var _constant = require("../utils/constant");

var _loading = _interopRequireDefault(require("../loading"));

var _PickerColumn = _interopRequireDefault(require("./PickerColumn"));

var _createNamespace = (0, _utils.createNamespace)('picker'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var _default2 = createComponent({
  props: (0, _extends2.default)({}, _shared.pickerProps, {
    defaultIndex: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: 'setColumns'
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, (0, _deepClone.deepClone)(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm: function onConfirm() {
      this.children.map(function (child) {
        return child.stopMomentum();
      });
      this.emit('confirm');
    },
    onCancel: function onCancel() {
      this.emit('cancel');
    }
  },
  render: function render(h) {
    var _this4 = this;

    var itemHeight = this.itemHeight;
    var wrapHeight = itemHeight * this.visibleItemCount;
    var columns = this.simple ? [this.columns] : this.columns;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: wrapHeight + "px"
    };
    var maskStyle = {
      backgroundSize: "100% " + (wrapHeight - itemHeight) / 2 + "px"
    };
    var Toolbar = this.showToolbar && h("div", {
      "class": [_constant.BORDER_TOP_BOTTOM, bem('toolbar')]
    }, [this.slots() || [h("button", {
      "class": bem('cancel'),
      "on": {
        "click": this.onCancel
      }
    }, [this.cancelButtonText || t('cancel')]), this.slots('title') || this.title && h("div", {
      "class": ['van-ellipsis', bem('title')]
    }, [this.title]), h("button", {
      "class": bem('confirm'),
      "on": {
        "click": this.onConfirm
      }
    }, [this.confirmButtonText || t('confirm')])]]);
    return h("div", {
      "class": bem()
    }, [this.toolbarPosition === 'top' ? Toolbar : h(), this.loading ? h(_loading.default, {
      "class": bem('loading'),
      "attrs": {
        "color": _constant.BLUE
      }
    }) : h(), this.slots('columns-top'), h("div", {
      "class": bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": _event.preventDefault
      }
    }, [columns.map(function (item, index) {
      return h(_PickerColumn.default, {
        "attrs": {
          "valueKey": _this4.valueKey,
          "allowHtml": _this4.allowHtml,
          "className": item.className,
          "itemHeight": _this4.itemHeight,
          "defaultIndex": item.defaultIndex || _this4.defaultIndex,
          "visibleItemCount": _this4.visibleItemCount,
          "initialOptions": _this4.simple ? item : item.values
        },
        "on": {
          "change": function change() {
            _this4.onChange(index);
          }
        }
      });
    }), h("div", {
      "class": bem('mask'),
      "style": maskStyle
    }), h("div", {
      "class": [_constant.BORDER_UNSET_TOP_BOTTOM, bem('frame')],
      "style": frameStyle
    })]), this.slots('columns-bottom'), this.toolbarPosition === 'bottom' ? Toolbar : h()]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/event":1571651193411,"../utils/deep-clone":1571651193424,"./shared":1571651193425,"../utils/constant":1571651193406,"../loading":1571651193419,"./PickerColumn":1571651193426}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193424, function(require, module, exports) {


exports.__esModule = true;
exports.deepClone = deepClone;

var _deepAssign = require("./deep-assign");

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return (0, _deepAssign.deepAssign)({}, obj);
  }

  return obj;
}
}, function(modId) { var map = {"./deep-assign":1571651193398}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193425, function(require, module, exports) {


exports.__esModule = true;
exports.pickerProps = void 0;
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  allowHtml: {
    type: Boolean,
    default: true
  },
  visibleItemCount: {
    type: Number,
    default: 5
  },
  itemHeight: {
    type: Number,
    default: 44
  }
};
exports.pickerProps = pickerProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193426, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _deepClone = require("../utils/deep-clone");

var _utils = require("../utils");

var _number = require("../utils/format/number");

var _event = require("../utils/dom/event");

var _touch = require("../mixins/touch");

var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动，持续 `MOMENTUM_DURATION`

var MOMENTUM_DURATION = 1000;
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var _createNamespace = (0, _utils.createNamespace)('picker-column'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return (0, _utils.isObj)(option) && option.disabled;
}

var _default2 = createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    valueKey: String,
    allowHtml: Boolean,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      offset: 0,
      duration: 0,
      options: (0, _deepClone.deepClone)(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        var translateY = getElementTranslateY(this.$refs.wrapper);
        this.offset = Math.min(0, translateY - this.baseOffset);
        this.startOffset = this.offset;
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove: function onTouchMove(event) {
      this.moving = true;
      this.touchMove(event);

      if (this.direction === 'vertical') {
        (0, _event.preventDefault)(event, true);
      }

      this.offset = (0, _number.range)(this.startOffset + this.deltaY, -(this.count * this.itemHeight), this.itemHeight);
      var now = Date.now();

      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd: function onTouchEnd() {
      var distance = this.offset - this.momentumOffset;
      var duration = Date.now() - this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      var index = this.getIndexByOffset(this.offset);
      this.moving = false;
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    onTransitionEnd: function onTransitionEnd() {
      this.stopMomentum();
    },
    onClickItem: function onClickItem(index) {
      if (this.moving) {
        return;
      }

      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    adjustIndex: function adjustIndex(index) {
      index = (0, _number.range)(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    },
    getOptionText: function getOptionText(option) {
      return (0, _utils.isObj)(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      var _this = this;

      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this.currentIndex) {
          _this.currentIndex = index;

          if (userAction) {
            _this.$emit('change', index);
          }
        }
      }; // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件


      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    },
    getIndexByOffset: function getIndexByOffset(offset) {
      return (0, _number.range)(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.002 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = MOMENTUM_DURATION;
      this.setIndex(index, true);
    },
    stopMomentum: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    },
    genOptions: function genOptions() {
      var _this2 = this;

      var h = this.$createElement;
      var optionStyle = {
        height: this.itemHeight + "px"
      };
      return this.options.map(function (option, index) {
        var text = _this2.getOptionText(option);

        var disabled = isOptionDisabled(option);
        var data = {
          style: optionStyle,
          attrs: {
            role: 'button',
            tabindex: disabled ? -1 : 0
          },
          class: ['van-ellipsis', bem('item', {
            disabled: disabled,
            selected: index === _this2.currentIndex
          })],
          on: {
            click: function click() {
              _this2.onClickItem(index);
            }
          }
        };

        if (_this2.allowHtml) {
          data.domProps = {
            innerHTML: text
          };
        }

        return h("li", (0, _babelHelperVueJsxMergeProps.default)([{}, data]), [_this2.allowHtml ? '' : text]);
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var wrapperStyle = {
      transform: "translate3d(0, " + (this.offset + this.baseOffset) + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: this.duration ? 'all' : 'none',
      lineHeight: this.itemHeight + "px"
    };
    return h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("ul", {
      "ref": "wrapper",
      "style": wrapperStyle,
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [this.genOptions()])]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils/deep-clone":1571651193424,"../utils":1571651193393,"../utils/format/number":1571651193427,"../utils/dom/event":1571651193411,"../mixins/touch":1571651193409}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193427, function(require, module, exports) {


exports.__esModule = true;
exports.range = range;

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193428, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _shared = require("../cell/shared");

var _event = require("../utils/dom/event");

var _resetScroll = require("../utils/dom/reset-scroll");

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('field'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  inheritAttrs: false,
  props: (0, _extends2.default)({}, _shared.cellProps, {
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && (0, _utils.isDef)(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      var listeners = (0, _extends2.default)({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });
      delete listeners.click;
      return listeners;
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.labelWidth;

      if (labelWidth) {
        return {
          width: (0, _utils.addUnit)(labelWidth)
        };
      }
    }
  },
  methods: {
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      if (!target) {
        return;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && (0, _utils.isDef)(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      (0, _resetScroll.resetScroll)();
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onClickLeftIcon: function onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },
    onClickRightIcon: function onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear: function onClear(event) {
      (0, _event.preventDefault)(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          (0, _event.preventDefault)(event);
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if ((0, _utils.isObj)(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var inputSlot = this.slots('input');

      if (inputSlot) {
        return h("div", {
          "class": bem('control', this.inputAlign)
        }, [inputSlot]);
      }

      var inputProps = {
        ref: 'input',
        class: bem('control', this.inputAlign),
        domProps: {
          value: this.value
        },
        attrs: (0, _extends2.default)({}, this.$attrs, {
          readonly: this.readonly
        }),
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [{
          name: 'model',
          value: this.value
        }]
      };

      if (this.type === 'textarea') {
        return h("textarea", (0, _babelHelperVueJsxMergeProps.default)([{}, inputProps]));
      }

      return h("input", (0, _babelHelperVueJsxMergeProps.default)([{
        "attrs": {
          "type": this.type
        }
      }, inputProps]));
    },
    renderLeftIcon: function renderLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon
          }
        }, [this.slots('left-icon') || h(_icon.default, {
          "attrs": {
            "name": this.leftIcon
          }
        })]);
      }
    },
    renderRightIcon: function renderRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return h("div", {
          "class": bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon
          }
        }, [slots('right-icon') || h(_icon.default, {
          "attrs": {
            "name": this.rightIcon
          }
        })]);
      }
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var slots = this.slots,
        labelAlign = this.labelAlign;
    var scopedSlots = {
      icon: this.renderLeftIcon
    };

    if (slots('label')) {
      scopedSlots.title = function () {
        return slots('label');
      };
    }

    return h(_cell.default, {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "clickable": this.clickable,
        "titleStyle": this.labelStyle,
        "titleClass": [bem('label', labelAlign), this.labelClass],
        "arrowDirection": this.arrowDirection
      },
      "class": bem((_bem = {
        error: this.error
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "scopedSlots": scopedSlots,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('body')
    }, [this.renderInput(), this.showClear && h(_icon.default, {
      "attrs": {
        "name": "clear"
      },
      "class": bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), this.renderRightIcon(), slots('button') && h("div", {
      "class": bem('button')
    }, [slots('button')])]), this.errorMessage && h("div", {
      "class": bem('error-message', this.errorMessageAlign)
    }, [this.errorMessage])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../icon":1571651193415,"../cell":1571651193429,"../cell/shared":1571651193430,"../utils/dom/event":1571651193411,"../utils/dom/reset-scroll":1571651193432,"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193429, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _shared = require("./shared");

var _functional = require("../utils/functional");

var _router = require("../utils/router");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Cell(h, props, slots, ctx) {
  var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink,
      arrowDirection = props.arrowDirection;
  var showTitle = slots.title || (0, _utils.isDef)(title);
  var showValue = slots.default || (0, _utils.isDef)(value);
  var showLabel = slots.label || (0, _utils.isDef)(label);
  var Label = showLabel && h("div", {
    "class": [bem('label'), props.labelClass]
  }, [slots.label ? slots.label() : label]);
  var Title = showTitle && h("div", {
    "class": [bem('title'), props.titleClass],
    "style": props.titleStyle
  }, [slots.title ? slots.title() : h("span", [title]), Label]);
  var Value = showValue && h("div", {
    "class": [bem('value', {
      alone: !slots.title && !title
    }), props.valueClass]
  }, [slots.default ? slots.default() : h("span", [value])]);
  var LeftIcon = slots.icon ? slots.icon() : icon && h(_icon.default, {
    "class": bem('left-icon'),
    "attrs": {
      "name": icon
    }
  });
  var rightIconSlot = slots['right-icon'];
  var RightIcon = rightIconSlot ? rightIconSlot() : isLink && h(_icon.default, {
    "class": bem('right-icon'),
    "attrs": {
      "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
    }
  });

  function onClick(event) {
    (0, _functional.emit)(ctx, 'click', event);
    (0, _router.functionalRoute)(ctx);
  }

  var clickable = isLink || props.clickable;
  var classes = {
    clickable: clickable,
    center: props.center,
    required: props.required,
    borderless: !props.border
  };

  if (size) {
    classes[size] = size;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(classes),
    "attrs": {
      "role": clickable ? 'button' : null,
      "tabindex": clickable ? 0 : null
    },
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [LeftIcon, Title, Value, RightIcon, slots.extra && slots.extra()]);
}

Cell.props = (0, _extends2.default)({}, _shared.cellProps, {}, _router.routeProps);

var _default = createComponent(Cell);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"./shared":1571651193430,"../utils/functional":1571651193405,"../utils/router":1571651193431,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193430, function(require, module, exports) {


exports.__esModule = true;
exports.cellProps = void 0;
var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};
exports.cellProps = cellProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193431, function(require, module, exports) {


exports.__esModule = true;
exports.route = route;
exports.functionalRoute = functionalRoute;
exports.routeProps = void 0;

/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        /* istanbul ignore if */
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}

function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}

var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
exports.routeProps = routeProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193432, function(require, module, exports) {


exports.__esModule = true;
exports.resetScroll = resetScroll;

var _system = require("../validate/system");

var _scroll = require("./scroll");

/**
 * Hack for iOS12 page scroll
 * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
 */
var isIOS = (0, _system.isIOS)();
/* istanbul ignore next */

function resetScroll() {
  if (isIOS) {
    (0, _scroll.setRootScrollTop)((0, _scroll.getRootScrollTop)());
  }
}
}, function(modId) { var map = {"../validate/system":1571651193433,"./scroll":1571651193414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193433, function(require, module, exports) {


exports.__esModule = true;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;

var _ = require("..");

function isAndroid() {
  /* istanbul ignore next */
  return _.isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function isIOS() {
  /* istanbul ignore next */
  return _.isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
}, function(modId) { var map = {"..":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193434, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Toast = _interopRequireDefault(require("./Toast"));

var _utils = require("../utils");

var defaultOptions = {
  icon: '',
  type: 'text',
  mask: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  onOpened: null,
  duration: 3000,
  iconPrefix: undefined,
  position: 'middle',
  transition: 'van-fade',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body',
  overlayStyle: null,
  closeOnClick: false
};
var queue = [];
var multiple = false;
var currentOptions = (0, _extends2.default)({}, defaultOptions);

function parseOptions(message) {
  if ((0, _utils.isObj)(message)) {
    return message;
  }

  return {
    message: message
  };
}

function createInstance() {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return {};
  }

  if (!queue.length || multiple) {
    var toast = new (_vue.default.extend(_Toast.default))({
      el: document.createElement('div')
    });
    toast.$on('input', function (value) {
      toast.value = value;
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformOptions(options) {
  options = (0, _extends2.default)({}, options);
  options.overlay = options.mask;
  delete options.mask;
  delete options.duration;
  return options;
}

function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = (0, _extends2.default)({}, currentOptions, {}, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !_utils.isServer) {
        toast.$on('closed', function () {
          clearTimeout(toast.timer);
          queue = queue.filter(function (item) {
            return item !== toast;
          });
          var parent = toast.$el.parentNode;

          if (parent) {
            parent.removeChild(toast.$el);
          }

          toast.$destroy();
        });
      }
    }
  });
  (0, _extends2.default)(toast, transformOptions(options));
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast((0, _extends2.default)({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  (0, _extends2.default)(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = (0, _extends2.default)({}, defaultOptions);
};

Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

Toast.install = function () {
  _vue.default.use(_Toast.default);
};

_vue.default.prototype.$toast = Toast;
var _default = Toast;
exports.default = _default;
}, function(modId) { var map = {"./Toast":1571651193435,"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193435, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _popup = require("../mixins/popup");

var _icon = _interopRequireDefault(require("../icon"));

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('toast'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [_popup.PopupMixin],
  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    closeOnClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    transition: {
      type: String,
      default: 'van-fade'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  mounted: function mounted() {
    this.toggleClickable();
  },
  destroyed: function destroyed() {
    this.toggleClickable();
  },
  watch: {
    value: 'toggleClickable',
    forbidClick: 'toggleClickable'
  },
  methods: {
    onClick: function onClick() {
      if (this.closeOnClick) {
        this.close();
      }
    },
    toggleClickable: function toggleClickable() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    },

    /* istanbul ignore next */
    onAfterEnter: function onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('closed');
    }
  },
  render: function render() {
    var h = arguments[0];
    var type = this.type,
        icon = this.icon,
        message = this.message,
        iconPrefix = this.iconPrefix,
        loadingType = this.loadingType;
    var hasIcon = icon || type === 'success' || type === 'fail';

    function ToastIcon() {
      if (hasIcon) {
        return h(_icon.default, {
          "class": bem('icon'),
          "attrs": {
            "classPrefix": iconPrefix,
            "name": icon || type
          }
        });
      }

      if (type === 'loading') {
        return h(_loading.default, {
          "class": bem('loading'),
          "attrs": {
            "color": "white",
            "type": loadingType
          }
        });
      }
    }

    function Message() {
      if (!(0, _utils.isDef)(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return h("div", {
          "class": bem('text'),
          "domProps": {
            "innerHTML": message
          }
        });
      }

      return h("div", {
        "class": bem('text')
      }, [message]);
    }

    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterEnter": this.onAfterEnter,
        "afterLeave": this.onAfterLeave
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [bem([this.position, {
        text: !hasIcon && type !== 'loading'
      }]), this.className],
      "on": {
        "click": this.onClick
      }
    }, [ToastIcon(), Message()])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/popup":1571651193407,"../icon":1571651193415,"../loading":1571651193419}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193436, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _router = require("../utils/router");

var _icon = _interopRequireDefault(require("../icon"));

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('button'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Button(h, props, slots, ctx) {
  var _ref;

  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      color = props.color,
      plain = props.plain,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;
  var style = {};

  if (color) {
    style.color = plain ? color : _constant.WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    } // hide border when color is linear-gradient


    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event) {
    if (!loading && !disabled) {
      (0, _functional.emit)(ctx, 'click', event);
      (0, _router.functionalRoute)(ctx);
    }
  }

  function onTouchstart(event) {
    (0, _functional.emit)(ctx, 'touchstart', event);
  }

  var classes = [bem([type, props.size, {
    plain: plain,
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    round: props.round,
    square: props.square
  }]), (_ref = {}, _ref[_constant.BORDER_SURROUND] = hairline, _ref)];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(_loading.default, {
        "class": bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": type === 'default' ? undefined : ''
        }
      }));
    } else if (icon) {
      content.push(h(_icon.default, {
        "attrs": {
          "name": icon
        },
        "class": bem('icon')
      }));
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": bem('text')
      }, [text]));
    }

    return content;
  }

  return h(tag, (0, _babelHelperVueJsxMergeProps.default)([{
    "style": style,
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, (0, _functional.inherit)(ctx)]), [Content()]);
}

Button.props = (0, _extends2.default)({}, _router.routeProps, {
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
});

var _default = createComponent(Button);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/constant":1571651193406,"../utils/router":1571651193431,"../icon":1571651193415,"../loading":1571651193419}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193437, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _utils = require("../utils");

var instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (_vue.default.extend(_Dialog.default))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
}

function Dialog(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance || !isInDocument(instance.$el)) {
      initInstance();
    }

    (0, _extends2.default)(instance, Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  width: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  transition: 'van-dialog-bounce',
  beforeClose: null,
  overlayClass: '',
  overlayStyle: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog((0, _extends2.default)({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  (0, _extends2.default)(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = (0, _extends2.default)({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();

Dialog.install = function () {
  _vue.default.use(_Dialog.default);
};

Dialog.Component = _Dialog.default;
_vue.default.prototype.$dialog = Dialog;
var _default = Dialog;
exports.default = _default;
}, function(modId) { var map = {"./Dialog":1571651193438,"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193438, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _popup = require("../mixins/popup");

var _closeOnPopstate = require("../mixins/close-on-popstate");

var _button = _interopRequireDefault(require("../button"));

var _createNamespace = (0, _utils.createNamespace)('dialog'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var _default = createComponent({
  mixins: [_popup.PopupMixin, _closeOnPopstate.CloseOnPopstateMixin],
  props: {
    title: String,
    width: [Number, String],
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    transition: {
      type: String,
      default: 'van-dialog-bounce'
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.handleAction('overlay');
    },
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action);

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false && _this.loading[action]) {
            _this.onClose(action);
          }

          _this.loading.confirm = false;
          _this.loading.cancel = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    },
    onOpened: function onOpened() {
      this.$emit('opened');
    },
    onClosed: function onClosed() {
      this.$emit('closed');
    }
  },
  render: function render() {
    var _bem,
        _this2 = this,
        _ref;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var message = this.message,
        messageAlign = this.messageAlign;
    var messageSlot = this.slots();
    var title = this.slots('title') || this.title;
    var Title = title && h("div", {
      "class": bem('header', {
        isolated: !message && !messageSlot
      })
    }, [title]);
    var Content = (messageSlot || message) && h("div", {
      "class": bem('content')
    }, [messageSlot || h("div", {
      "domProps": {
        "innerHTML": message
      },
      "class": bem('message', (_bem = {
        'has-title': title
      }, _bem[messageAlign] = messageAlign, _bem))
    })]);
    var hasButtons = this.showCancelButton && this.showConfirmButton;
    var ButtonGroup = h("div", {
      "class": [_constant.BORDER_TOP, bem('footer', {
        buttons: hasButtons
      })]
    }, [this.showCancelButton && h(_button.default, {
      "attrs": {
        "size": "large",
        "loading": this.loading.cancel,
        "text": this.cancelButtonText || t('cancel')
      },
      "class": bem('cancel'),
      "style": {
        color: this.cancelButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('cancel');
        }
      }
    }), this.showConfirmButton && h(_button.default, {
      "attrs": {
        "size": "large",
        "loading": this.loading.confirm,
        "text": this.confirmButtonText || t('confirm')
      },
      "class": [bem('confirm'), (_ref = {}, _ref[_constant.BORDER_LEFT] = hasButtons, _ref)],
      "style": {
        color: this.confirmButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('confirm');
        }
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "attrs": {
        "role": "dialog",
        "aria-labelledby": this.title || message
      },
      "class": [bem(), this.className],
      "style": {
        width: (0, _utils.addUnit)(this.width)
      }
    }, [Title, Content, ButtonGroup])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../mixins/popup":1571651193407,"../mixins/close-on-popstate":1571651193439,"../button":1571651193436}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193439, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CloseOnPopstateMixin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _event = require("../utils/dom/event");

var _bindEvent = require("./bind-event");

var CloseOnPopstateMixin = _vue.default.extend({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? _event.on : _event.off;
        action(window, 'popstate', this.close);
      }
    }
  }
});

exports.CloseOnPopstateMixin = CloseOnPopstateMixin;
}, function(modId) { var map = {"../utils/dom/event":1571651193411,"./bind-event":1571651193440}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193440, function(require, module, exports) {


exports.__esModule = true;
exports.BindEventMixin = BindEventMixin;

var _event = require("../utils/dom/event");

/**
 * Bind event when mounted or activated
 */
function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, _event.on, true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, _event.off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}
}, function(modId) { var map = {"../utils/dom/event":1571651193411}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193441, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _system = require("../utils/validate/system");

var _cell = _interopRequireDefault(require("../cell"));

var _field = _interopRequireDefault(require("../field"));

var _createNamespace = (0, _utils.createNamespace)('address-edit-detail'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var android = (0, _system.isAndroid)();

var _default = createComponent({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    detailMaxlength: Number,
    showSearchResult: Boolean
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    },
    onFinish: function onFinish() {
      this.$refs.field.blur();
    },
    renderFinish: function renderFinish() {
      var h = this.$createElement;
      var show = this.value && this.focused && android;

      if (show) {
        return h("div", {
          "class": bem('finish'),
          "on": {
            "click": this.onFinish
          }
        }, [t('complete')]);
      }
    },
    renderSearchResult: function renderSearchResult() {
      var _this = this;

      var h = this.$createElement;
      var searchResult = this.searchResult;
      var show = this.focused && searchResult && this.showSearchResult;

      if (show) {
        return searchResult.map(function (express) {
          return h(_cell.default, {
            "key": express.name + express.address,
            "attrs": {
              "title": express.name,
              "label": express.address,
              "icon": "location-o",
              "clickable": true
            },
            "on": {
              "click": function click() {
                _this.onSelect(express);
              }
            }
          });
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(_cell.default, {
      "class": bem()
    }, [h(_field.default, {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "value": this.value,
        "error": this.error,
        "label": t('label'),
        "maxlength": this.detailMaxlength,
        "placeholder": t('placeholder')
      },
      "ref": "field",
      "scopedSlots": {
        icon: this.renderFinish
      },
      "on": (0, _extends2.default)({}, this.$listeners)
    }), this.renderSearchResult()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/validate/system":1571651193433,"../cell":1571651193429,"../field":1571651193428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193442, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _cell = _interopRequireDefault(require("../cell"));

var _switch = _interopRequireDefault(require("../switch"));

var _shared = require("../switch/shared");

var _createNamespace = (0, _utils.createNamespace)('switch-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border
    },
    "class": bem([props.cellSize])
  }, (0, _functional.inherit)(ctx)]), [h(_switch.default, {
    "props": (0, _extends2.default)({}, props),
    "on": (0, _extends2.default)({}, ctx.listeners)
  })]);
}

SwitchCell.props = (0, _extends2.default)({}, _shared.switchProps, {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
});

var _default = createComponent(SwitchCell);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../cell":1571651193429,"../switch":1571651193443,"../switch/shared":1571651193444}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193443, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _shared = require("./shared");

var _functional = require("../utils/functional");

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('switch'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Switch(h, props, slots, ctx) {
  var size = props.size,
      value = props.value,
      loading = props.loading,
      disabled = props.disabled,
      activeColor = props.activeColor,
      activeValue = props.activeValue,
      inactiveColor = props.inactiveColor,
      inactiveValue = props.inactiveValue;
  var checked = value === activeValue;
  var switchStyle = {
    fontSize: size,
    backgroundColor: checked ? activeColor : inactiveColor
  };
  var loadingColor = checked ? activeColor || _constant.BLUE : inactiveColor || _constant.GRAY_DARK;

  function onClick() {
    if (!disabled && !loading) {
      var newValue = checked ? inactiveValue : activeValue;
      (0, _functional.emit)(ctx, 'input', newValue);
      (0, _functional.emit)(ctx, 'change', newValue);
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      on: checked,
      disabled: disabled
    }),
    "attrs": {
      "role": "switch",
      "aria-checked": String(checked)
    },
    "style": switchStyle,
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('node')
  }, [loading && h(_loading.default, {
    "class": bem('loading'),
    "attrs": {
      "color": loadingColor
    }
  })])]);
}

Switch.props = _shared.switchProps;

var _default = createComponent(Switch);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"./shared":1571651193444,"../utils/functional":1571651193405,"../loading":1571651193419}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193444, function(require, module, exports) {


exports.__esModule = true;
exports.switchProps = void 0;

/**
 * Common Switch Props
 */
var switchProps = {
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    default: true
  },
  inactiveValue: {
    type: null,
    default: false
  },
  size: {
    type: String,
    default: '30px'
  }
};
exports.switchProps = switchProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193445, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _button = _interopRequireDefault(require("../button"));

var _radioGroup = _interopRequireDefault(require("../radio-group"));

var _Item = _interopRequireDefault(require("./Item"));

var _createNamespace = (0, _utils.createNamespace)('address-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function AddressList(h, props, slots, ctx) {
  function renderList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(_Item.default, {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable
        },
        "key": item.id,
        "on": {
          "select": function select() {
            (0, _functional.emit)(ctx, disabled ? 'select-disabled' : 'select', item, index);

            if (!disabled) {
              (0, _functional.emit)(ctx, 'input', item.id);
            }
          },
          "edit": function edit() {
            (0, _functional.emit)(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          },
          "click": function click() {
            (0, _functional.emit)(ctx, 'click-item', item, index);
          }
        }
      });
    });
  }

  var List = renderList(props.list);
  var DisabledList = renderList(props.disabledList, true);
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [slots.top && slots.top(), h(_radioGroup.default, {
    "attrs": {
      "value": props.value
    }
  }, [List]), props.disabledText && h("div", {
    "class": bem('disabled-text')
  }, [props.disabledText]), DisabledList, slots.default && slots.default(), h(_button.default, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addButtonText || t('add')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'add');
      }
    }
  })]);
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [Number, String],
  switchable: {
    type: Boolean,
    default: true
  }
};

var _default = createComponent(AddressList);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../button":1571651193436,"../radio-group":1571651193446,"./Item":1571651193448}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193446, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('radio-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanRadio')],
  props: {
    value: null,
    disabled: Boolean,
    checkedColor: String,
    iconSize: [Number, String]
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "radiogroup"
      }
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193447, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ChildrenMixin = ChildrenMixin;
exports.ParentMixin = ParentMixin;

var _vue = _interopRequireDefault(require("vue"));

function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return _vue.default.extend({
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        if (this.disableBindRelation) {
          return null;
        }

        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();
      return this.parent.children.indexOf(this);
    }, _computed),
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        var vnodes = flattenVNodes(this.parent.slots());
        children.sort(function (a, b) {
          return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
        });
        this.parent.children = children;
      }
    }
  });
}

function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193448, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _radio = _interopRequireDefault(require("../radio"));

var _createNamespace = (0, _utils.createNamespace)('address-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onClick() {
    if (switchable) {
      (0, _functional.emit)(ctx, 'select');
    }

    (0, _functional.emit)(ctx, 'click');
  }

  var renderRightIcon = function renderRightIcon() {
    return h(_icon.default, {
      "attrs": {
        "name": "edit"
      },
      "class": bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          (0, _functional.emit)(ctx, 'edit');
          (0, _functional.emit)(ctx, 'click');
        }
      }
    });
  };

  var renderContent = function renderContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": bem('name')
    }, [data.name + "\uFF0C" + data.tel]), h("div", {
      "class": bem('address')
    }, [data.address])];
    return switchable && !disabled ? h(_radio.default, {
      "attrs": {
        "name": data.id,
        "iconSize": 16
      }
    }, [Info]) : Info;
  };

  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      disabled: disabled
    }),
    "attrs": {
      "valueClass": bem('value'),
      "clickable": switchable && !disabled
    },
    "scopedSlots": {
      default: renderContent,
      'right-icon': renderRightIcon
    },
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean
};

var _default = createComponent(AddressItem);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../icon":1571651193415,"../cell":1571651193429,"../radio":1571651193449}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193449, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _checkbox = require("../mixins/checkbox");

var _createNamespace = (0, _utils.createNamespace)('radio'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _checkbox.CheckboxMixin)({
    bem: bem,
    role: 'radio',
    parent: 'vanRadio'
  })],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    toggle: function toggle() {
      this.currentValue = this.name;
    }
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/checkbox":1571651193450}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193450, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckboxMixin = void 0;

var _icon = _interopRequireDefault(require("../icon"));

var _relation = require("./relation");

var _utils = require("../utils");

/**
 * Common part of Checkbox & Radio
 */
var CheckboxMixin = function CheckboxMixin(_ref) {
  var parent = _ref.parent,
      bem = _ref.bem,
      role = _ref.role;
  return {
    mixins: [(0, _relation.ChildrenMixin)(parent)],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      iconSize: [Number, String],
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round'
      },
      bindGroup: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      disableBindRelation: function disableBindRelation() {
        return !this.bindGroup;
      },
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor || this.parent && this.parent.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      },
      tabindex: function tabindex() {
        if (this.isDisabled || role === 'radio' && !this.checked) {
          return -1;
        }

        return 0;
      }
    },
    methods: {
      onClick: function onClick(event) {
        var label = this.$refs.label;
        var target = event.target;
        var labelClicked = label && (label === target || label.contains(target));

        if (!this.isDisabled && !(labelClicked && this.labelDisabled)) {
          this.toggle();
        }

        this.$emit('click', event);
      }
    },
    render: function render() {
      var h = arguments[0];
      var slots = this.slots,
          checked = this.checked;
      var CheckIcon = slots('icon', {
        checked: checked
      }) || h(_icon.default, {
        "attrs": {
          "name": "success"
        },
        "style": this.iconStyle
      });
      var Label = slots() && h("span", {
        "ref": "label",
        "class": bem('label', [this.labelPosition, {
          disabled: this.isDisabled
        }])
      }, [slots()]);
      var iconSize = this.iconSize || this.parent && this.parent.iconSize;
      var Children = [h("div", {
        "class": bem('icon', [this.shape, {
          disabled: this.isDisabled,
          checked: checked
        }]),
        "style": {
          fontSize: (0, _utils.addUnit)(iconSize)
        }
      }, [CheckIcon])];

      if (this.labelPosition === 'left') {
        Children.unshift(Label);
      } else {
        Children.push(Label);
      }

      return h("div", {
        "attrs": {
          "role": role,
          "tabindex": this.tabindex,
          "aria-checked": String(this.checked)
        },
        "class": bem(),
        "on": {
          "click": this.onClick
        }
      }, [Children]);
    }
  };
};

exports.CheckboxMixin = CheckboxMixin;
}, function(modId) { var map = {"../icon":1571651193415,"./relation":1571651193447,"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193451, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _tag = _interopRequireDefault(require("../tag"));

var _image = _interopRequireDefault(require("../image"));

var _createNamespace = (0, _utils.createNamespace)('card'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Card(h, props, slots, ctx) {
  var thumb = props.thumb;
  var showNum = slots.num || (0, _utils.isDef)(props.num);
  var showPrice = slots.price || (0, _utils.isDef)(props.price);
  var showOriginPrice = slots['origin-price'] || (0, _utils.isDef)(props.originPrice);
  var showBottom = showNum || showPrice || showOriginPrice;

  function onThumbClick(event) {
    (0, _functional.emit)(ctx, 'click-thumb', event);
  }

  function ThumbTag() {
    if (slots.tag || props.tag) {
      return h("div", {
        "class": bem('tag')
      }, [slots.tag ? slots.tag() : h(_tag.default, {
        "attrs": {
          "mark": true,
          "type": "danger"
        }
      }, [props.tag])]);
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return h("a", {
        "attrs": {
          "href": props.thumbLink
        },
        "class": bem('thumb'),
        "on": {
          "click": onThumbClick
        }
      }, [slots.thumb ? slots.thumb() : h(_image.default, {
        "attrs": {
          "src": thumb,
          "width": "100%",
          "height": "100%",
          "fit": "contain",
          "lazy-load": props.lazyLoad
        }
      }), ThumbTag()]);
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title();
    }

    if (props.title) {
      return h("div", {
        "class": bem('title')
      }, [props.title]);
    }
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc();
    }

    if (props.desc) {
      return h("div", {
        "class": [bem('desc'), 'van-ellipsis']
      }, [props.desc]);
    }
  }

  function Price() {
    if (showPrice) {
      return h("div", {
        "class": bem('price')
      }, [slots.price ? slots.price() : props.currency + " " + props.price]);
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      var slot = slots['origin-price'];
      return h("div", {
        "class": bem('origin-price')
      }, [slot ? slot() : props.currency + " " + props.originPrice]);
    }
  }

  function Num() {
    if (showNum) {
      return h("div", {
        "class": bem('num')
      }, [slots.num ? slots.num() : "x " + props.num]);
    }
  }

  function Footer() {
    if (slots.footer) {
      return h("div", {
        "class": bem('footer')
      }, [slots.footer()]);
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem()
  }, (0, _functional.inherit)(ctx, true)]), [h("div", {
    "class": bem('header')
  }, [Thumb(), h("div", {
    "class": bem('content', {
      centered: props.centered
    })
  }, [Title(), Desc(), slots.tags && slots.tags(), showBottom && h("div", {
    "class": "van-card__bottom"
  }, [Price(), OriginPrice(), Num(), slots.bottom && slots.bottom()])])]), Footer()]);
}

Card.props = {
  tag: String,
  desc: String,
  thumb: String,
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥'
  }
};

var _default = createComponent(Card);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../tag":1571651193452,"../image":1571651193417}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193452, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('tag'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Tag(h, props, slots, ctx) {
  var _style, _ref;

  var type = props.type,
      mark = props.mark,
      plain = props.plain,
      color = props.color,
      round = props.round,
      size = props.size;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round
  };

  if (size) {
    classes[size] = size;
  }

  return h("span", (0, _babelHelperVueJsxMergeProps.default)([{
    "style": style,
    "class": [bem([classes, type]), (_ref = {}, _ref[_constant.BORDER_SURROUND] = plain, _ref)]
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default()]);
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  type: {
    type: String,
    default: 'default'
  }
};

var _default = createComponent(Tag);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193453, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('cell-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function CellGroup(h, props, slots, ctx) {
  var _ref;

  var Group = h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = props.border, _ref)]
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default()]);

  if (props.title || slots.title) {
    return h("div", [h("div", {
      "class": bem('title')
    }, [slots.title ? slots.title() : props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};

var _default = createComponent(CellGroup);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193454, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _checkbox = require("../mixins/checkbox");

var _createNamespace = (0, _utils.createNamespace)('checkbox'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _checkbox.CheckboxMixin)({
    bem: bem,
    role: 'checkbox',
    parent: 'vanCheckbox'
  })],
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    toggle: function toggle(checked) {
      var _this = this;

      if (checked === void 0) {
        checked = !this.checked;
      }

      // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.
      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/checkbox":1571651193450}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193455, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('checkbox-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default2 = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanCheckbox')],
  props: {
    max: Number,
    disabled: Boolean,
    iconSize: [Number, String],
    checkedColor: String,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    toggleAll: function toggleAll(checked) {
      this.children.forEach(function (item) {
        item.toggle(checked);
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.slots()]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193456, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _raf = require("../utils/dom/raf");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('circle'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var PERIMETER = 3140;
var uid = 0;

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

function getPath(clockwise, viewBoxSize) {
  var sweepFlag = clockwise ? 1 : 0;
  return "M " + viewBoxSize / 2 + " " + viewBoxSize / 2 + " m 0, -500 a 500, 500 0 1, " + sweepFlag + " 0, 1000 a 500, 500 0 1, " + sweepFlag + " 0, -1000";
}

var _default = createComponent({
  props: {
    text: String,
    value: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 0
    },
    size: {
      type: [String, Number],
      default: 100
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: _constant.WHITE
    },
    color: {
      type: [String, Object],
      default: _constant.BLUE
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    this.uid = "van-circle-gradient-" + uid++;
  },
  computed: {
    style: function style() {
      var size = (0, _utils.addUnit)(this.size);
      return {
        width: size,
        height: size
      };
    },
    path: function path() {
      return getPath(this.clockwise, this.viewBoxSize);
    },
    viewBoxSize: function viewBoxSize() {
      return 1000 + this.strokeWidth;
    },
    layerStyle: function layerStyle() {
      var offset = PERIMETER * this.value / 100;
      return {
        stroke: "" + this.color,
        strokeWidth: this.strokeWidth + 1 + "px",
        strokeDasharray: offset + "px " + PERIMETER + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    },
    gradient: function gradient() {
      return (0, _utils.isObj)(this.color);
    },
    LinearGradient: function LinearGradient() {
      var _this = this;

      var h = this.$createElement;

      if (!this.gradient) {
        return;
      }

      var Stops = Object.keys(this.color).sort(function (a, b) {
        return parseFloat(a) - parseFloat(b);
      }).map(function (key, index) {
        return h("stop", {
          "key": index,
          "attrs": {
            "offset": key,
            "stop-color": _this.color[key]
          }
        });
      });
      return h("defs", [h("linearGradient", {
        "attrs": {
          "id": this.uid,
          "x1": "100%",
          "y1": "0%",
          "x2": "0%",
          "y2": "0%"
        }
      }, [Stops])]);
    }
  },
  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          (0, _raf.cancelRaf)(this.rafId);
          this.rafId = (0, _raf.raf)(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = (0, _raf.raf)(this.animate);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "style": this.style
    }, [h("svg", {
      "attrs": {
        "viewBox": "0 0 " + this.viewBoxSize + " " + this.viewBoxSize
      }
    }, [this.LinearGradient, h("path", {
      "class": bem('hover'),
      "style": this.hoverStyle,
      "attrs": {
        "d": this.path
      }
    }), h("path", {
      "attrs": {
        "d": this.path,
        "stroke": this.gradient ? "url(#" + this.uid + ")" : this.color
      },
      "class": bem('layer'),
      "style": this.layerStyle
    })]), this.slots() || this.text && h("div", {
      "class": bem('text')
    }, [this.text])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/raf":1571651193457,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193457, function(require, module, exports) {


exports.__esModule = true;
exports.raf = raf;
exports.doubleRaf = doubleRaf;
exports.cancelRaf = cancelRaf;

var _ = require("..");

/**
 * requestAnimationFrame polyfill
 */
var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _.isServer ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation


function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}

function cancelRaf(id) {
  iCancel.call(root, id);
}
}, function(modId) { var map = {"..":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193458, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('col'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "style": this.style,
      "class": bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193459, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('collapse'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanCollapse')],
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = this.border, _ref)]
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193460, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _raf = require("../utils/dom/raf");

var _cell = _interopRequireDefault(require("../cell"));

var _shared = require("../cell/shared");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('collapse-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanCollapse')],
  props: (0, _extends2.default)({}, _shared.cellProps, {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  }),
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    currentName: function currentName() {
      return (0, _utils.isDef)(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var _this$parent = this.parent,
          value = _this$parent.value,
          accordion = _this$parent.accordion;

      if (process.env.NODE_ENV !== 'production' && !accordion && !Array.isArray(value)) {
        console.error('[Vant] Collapse: type of prop "value" should be Array');
        return;
      }

      return accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var nextTick = _expanded ? this.$nextTick : _raf.raf;
      nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var offsetHeight = content.offsetHeight;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight; // use double raf to ensure animation can start in mobile safari

          (0, _raf.doubleRaf)(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    }
  },
  render: function render() {
    var _this3 = this,
        _ref;

    var h = arguments[0];
    var disabled = this.disabled,
        expanded = this.expanded;
    var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
      if (_this3.slots(name)) {
        slots[name] = function () {
          return _this3.slots(name);
        };
      }

      return slots;
    }, {});

    if (this.slots('value')) {
      titleSlots.default = function () {
        return _this3.slots('value');
      };
    }

    var Title = h(_cell.default, {
      "attrs": {
        "role": "button",
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": String(expanded)
      },
      "class": bem('title', {
        disabled: disabled,
        expanded: expanded
      }),
      "on": {
        "click": this.onClick
      },
      "scopedSlots": titleSlots,
      "props": (0, _extends2.default)({}, this.$props)
    });
    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "ref": "wrapper",
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [h("div", {
      "ref": "content",
      "class": bem('content')
    }, [this.slots()])]);
    return h("div", {
      "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP] = this.index, _ref)]
    }, [Title, Content]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../utils/dom/raf":1571651193457,"../cell":1571651193429,"../cell/shared":1571651193430,"../mixins/relation":1571651193447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193461, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _cell = _interopRequireDefault(require("../cell"));

var _createNamespace = (0, _utils.createNamespace)('contact-card'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function ContactCard(h, props, slots, ctx) {
  var type = props.type,
      editable = props.editable;

  function onClick(event) {
    if (editable) {
      (0, _functional.emit)(ctx, 'click', event);
    }
  }

  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "center": true,
      "border": false,
      "isLink": editable,
      "valueClass": bem('value'),
      "icon": type === 'edit' ? 'contact' : 'add-square'
    },
    "class": bem([type]),
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [type === 'add' ? props.addText || t('addText') : [h("div", [t('name') + "\uFF1A" + props.name]), h("div", [t('tel') + "\uFF1A" + props.tel])]]);
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'add'
  }
};

var _default = createComponent(ContactCard);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../cell":1571651193429}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193462, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _button = _interopRequireDefault(require("../button"));

var _field = _interopRequireDefault(require("../field"));

var _toast = _interopRequireDefault(require("../toast"));

var _dialog = _interopRequireDefault(require("../dialog"));

var _mobile = require("../utils/validate/mobile");

var _createNamespace = (0, _utils.createNamespace)('contact-edit'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var defaultContact = {
  tel: '',
  name: ''
};

var _default2 = createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return (0, _extends2.default)({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: _mobile.isMobile
    }
  },
  data: function data() {
    return {
      data: (0, _extends2.default)({}, defaultContact, {}, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = (0, _extends2.default)({}, defaultContact, {}, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast.default)(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog.default.confirm({
        message: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": bem()
    }, [h(_field.default, {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": t('name'),
        "placeholder": t('nameEmpty'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(_field.default, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telEmpty'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h("div", {
      "class": bem('buttons')
    }, [h(_button.default, {
      "attrs": {
        "block": true,
        "type": "danger",
        "text": t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(_button.default, {
      "attrs": {
        "block": true,
        "text": t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../button":1571651193436,"../field":1571651193428,"../toast":1571651193434,"../dialog":1571651193437,"../utils/validate/mobile":1571651193421}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193463, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _button = _interopRequireDefault(require("../button"));

var _radio = _interopRequireDefault(require("../radio"));

var _radioGroup = _interopRequireDefault(require("../radio-group"));

var _createNamespace = (0, _utils.createNamespace)('contact-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list && props.list.map(function (item, index) {
    function onClick() {
      (0, _functional.emit)(ctx, 'input', item.id);
      (0, _functional.emit)(ctx, 'select', item, index);
    }

    function Content() {
      return h(_radio.default, {
        "attrs": {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": _constant.RED
        },
        "on": {
          "click": onClick
        }
      }, [h("div", {
        "class": bem('name')
      }, [item.name + "\uFF0C" + item.tel])]);
    }

    function RightIcon() {
      return h(_icon.default, {
        "attrs": {
          "name": "edit"
        },
        "class": bem('edit'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();
            (0, _functional.emit)(ctx, 'edit', item, index);
          }
        }
      });
    }

    return h(_cell.default, {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "valueClass": bem('item-value')
      },
      "class": bem('item'),
      "scopedSlots": {
        default: Content,
        'right-icon': RightIcon
      },
      "on": {
        "click": onClick
      }
    });
  });
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [h(_radioGroup.default, {
    "attrs": {
      "value": props.value
    },
    "class": bem('group')
  }, [List]), h(_button.default, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addText || t('addText')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'add');
      }
    }
  })]);
}

ContactList.props = {
  value: null,
  list: Array,
  addText: String
};

var _default = createComponent(ContactList);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../utils/functional":1571651193405,"../icon":1571651193415,"../cell":1571651193429,"../button":1571651193436,"../radio":1571651193449,"../radio-group":1571651193446}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193464, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _raf = require("../utils/dom/raf");

var _utils2 = require("./utils");

var _createNamespace = (0, _utils.createNamespace)('count-down'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      remain: 0
    };
  },
  computed: {
    timeData: function timeData() {
      return (0, _utils2.parseTimeData)(this.remain);
    },
    formattedTime: function formattedTime() {
      return (0, _utils2.parseFormat)(this.format, this.timeData);
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  methods: {
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    pause: function pause() {
      this.counting = false;
      (0, _raf.cancelRaf)(this.rafId);
    },
    reset: function reset() {
      this.pause();
      this.remain = this.time;

      if (this.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.rafId = (0, _raf.raf)(function () {
        _this.setRemain(_this.getRemain());

        if (_this.remain !== 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.rafId = (0, _raf.raf)(function () {
        var remain = _this2.getRemain();

        if (!(0, _utils2.isSameSecond)(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain !== 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.slots('default', this.timeData) || this.formattedTime]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/raf":1571651193457,"./utils":1571651193465}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193465, function(require, module, exports) {


exports.__esModule = true;
exports.parseTimeData = parseTimeData;
exports.parseFormat = parseFormat;
exports.isSameSecond = isSameSecond;

var _string = require("../utils/format/string");

var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;

function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}

function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', (0, _string.padZero)(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', (0, _string.padZero)(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', (0, _string.padZero)(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', (0, _string.padZero)(seconds));
  }

  return format.replace('SSS', (0, _string.padZero)(milliseconds, 3));
}

function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
}, function(modId) { var map = {"../utils/format/string":1571651193400}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193466, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _string = require("../utils/format/string");

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _createNamespace = (0, _utils.createNamespace)('coupon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + (0, _string.padZero)(date.getMonth() + 1) + "." + (0, _string.padZero)(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

var _default = createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod() {
      var _this$coupon = this.coupon,
          startAt = _this$coupon.startAt,
          endAt = _this$coupon.endAt;
      return t('valid') + "\uFF1A" + getDate(startAt) + " - " + getDate(endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      if (coupon.denominations) {
        return "<span>" + this.currency + "</span> " + formatAmount(this.coupon.denominations);
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(this.coupon.discount));
      }

      return '';
    },
    conditionMessage: function conditionMessage() {
      var condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    }
  },
  render: function render() {
    var h = arguments[0];
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": bem('content')
    }, [h("div", {
      "class": bem('head')
    }, [h("h2", {
      "class": bem('amount'),
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": bem('body')
    }, [h("h2", {
      "class": bem('name')
    }, [coupon.name]), h("p", [this.validPeriod]), this.chosen && h(_checkbox.default, {
      "attrs": {
        "value": true,
        "checked-color": _constant.RED
      },
      "class": bem('corner')
    })])]), description && h("p", {
      "class": bem('description')
    }, [description])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../utils/format/string":1571651193400,"../checkbox":1571651193454}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193467, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _cell = _interopRequireDefault(require("../cell"));

var _createNamespace = (0, _utils.createNamespace)('coupon-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function formatValue(props) {
  var coupons = props.coupons,
      chosenCoupon = props.chosenCoupon,
      currency = props.currency;
  var coupon = coupons[chosenCoupon];

  if (coupon) {
    var value = coupon.denominations || coupon.value;
    return "-" + currency + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  var valueClass = props.coupons[props.chosenCoupon] ? 'van-coupon-cell--selected' : '';
  var value = formatValue(props);
  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "attrs": {
      "value": value,
      "title": props.title || t('title'),
      "border": props.border,
      "isLink": props.editable,
      "valueClass": valueClass
    }
  }, (0, _functional.inherit)(ctx, true)]));
}

CouponCell.model = {
  prop: 'chosenCoupon'
};
CouponCell.props = {
  title: String,
  coupons: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  currency: {
    type: String,
    default: '¥'
  },
  border: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  chosenCoupon: {
    type: Number,
    default: -1
  }
};

var _default2 = createComponent(CouponCell);

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../cell":1571651193429}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193468, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _tab = _interopRequireDefault(require("../tab"));

var _tabs = _interopRequireDefault(require("../tabs"));

var _field = _interopRequireDefault(require("../field"));

var _button = _interopRequireDefault(require("../button"));

var _coupon = _interopRequireDefault(require("../coupon"));

var _createNamespace = (0, _utils.createNamespace)('coupon-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';

var _default2 = createComponent({
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    },
    emptyImage: {
      type: String,
      default: EMPTY_IMAGE
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: 'scrollToShowCoupon'
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use vModel

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('empty')
      }, [h("img", {
        "attrs": {
          "src": this.emptyImage
        }
      }), h("p", [t('empty')])]);
    },
    renderExchangeButton: function renderExchangeButton() {
      var h = this.$createElement;
      return h(_button.default, {
        "attrs": {
          "size": "small",
          "type": "danger",
          "text": this.exchangeButtonText || t('exchange'),
          "loading": this.exchangeButtonLoading,
          "disabled": this.buttonDisabled
        },
        "class": bem('exchange'),
        "on": {
          "click": this.onClickExchangeButton
        }
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var coupons = this.coupons,
        disabledCoupons = this.disabledCoupons;
    var title = (this.enabledTitle || t('enable')) + " (" + coupons.length + ")";
    var disabledTitle = (this.disabledTitle || t('disabled')) + " (" + disabledCoupons.length + ")";
    var ExchangeBar = this.showExchangeBar && h(_field.default, {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || t('placeholder'),
        "maxlength": "20"
      },
      "class": bem('field'),
      "scopedSlots": {
        button: this.renderExchangeButton
      },
      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        }
      }
    });

    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(_tab.default, {
      "attrs": {
        "title": title
      }
    }, [h("div", {
      "class": bem('list'),
      "style": this.listStyle
    }, [coupons.map(function (coupon, index) {
      return h(_coupon.default, {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "currency": _this2.currency,
          "chosen": index === _this2.chosenCoupon
        },
        "nativeOn": {
          "click": onChange(index)
        }
      });
    }), !coupons.length && this.renderEmpty()])]);
    var DisabledCouponTab = h(_tab.default, {
      "attrs": {
        "title": disabledTitle
      }
    }, [h("div", {
      "class": bem('list'),
      "style": this.listStyle
    }, [disabledCoupons.map(function (coupon) {
      return h(_coupon.default, {
        "attrs": {
          "disabled": true,
          "coupon": coupon,
          "currency": _this2.currency
        },
        "key": coupon.id
      });
    }), !disabledCoupons.length && this.renderEmpty()])]);
    return h("div", {
      "class": bem()
    }, [ExchangeBar, h(_tabs.default, {
      "class": bem('tab'),
      "attrs": {
        "line-width": 120
      },
      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        }
      }
    }, [CouponTab, DisabledCouponTab]), h(_button.default, {
      "directives": [{
        name: "show",
        value: this.showCloseButton
      }],
      "attrs": {
        "size": "large",
        "text": this.closeButtonText || t('close')
      },
      "class": bem('close'),
      "on": {
        "click": onChange(-1)
      }
    })]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../tab":1571651193469,"../tabs":1571651193470,"../field":1571651193428,"../button":1571651193436,"../coupon":1571651193466}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193469, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _router = require("../utils/router");

var _createNamespace = (0, _utils.createNamespace)('tab'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanTabs')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    name: [Number, String],
    title: String,
    disabled: Boolean
  }),
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    computedName: function computedName() {
      return this.name || this.index;
    },
    isActive: function isActive() {
      return this.computedName === this.parent.currentName;
    }
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    'parent.currentIndex': function parentCurrentIndex() {
      this.inited = this.inited || this.isActive;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  mounted: function mounted() {
    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  render: function render(h) {
    var slots = this.slots,
        isActive = this.isActive;
    var shouldRender = this.inited || !this.parent.lazyRender;
    var Content = [shouldRender ? slots() : h()];

    if (slots('title')) {
      Content.push(h("div", {
        "ref": "title"
      }, [slots('title')]));
    }

    if (this.parent.animated) {
      return h("div", {
        "attrs": {
          "role": "tabpanel",
          "aria-hidden": !isActive
        },
        "class": bem('pane-wrapper', {
          inactive: !isActive
        })
      }, [h("div", {
        "class": bem('pane')
      }, [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: isActive
      }],
      "attrs": {
        "role": "tabpanel"
      },
      "class": bem('pane')
    }, [Content]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447,"../utils/router":1571651193431}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193470, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _utils2 = require("./utils");

var _router = require("../utils/router");

var _style = require("../utils/dom/style");

var _relation = require("../mixins/relation");

var _bindEvent = require("../mixins/bind-event");

var _constant = require("../utils/constant");

var _scroll = require("../utils/dom/scroll");

var _Title = _interopRequireDefault(require("./Title"));

var _Content = _interopRequireDefault(require("./Content"));

var _sticky = _interopRequireDefault(require("../sticky"));

var _createNamespace = (0, _utils.createNamespace)('tabs'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanTabs'), (0, _bindEvent.BindEventMixin)(function (bind) {
    bind(window, 'resize', this.setLine, true);
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0.3
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    }
  },
  watch: {
    color: 'setLine',
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    children: function children() {
      var _this = this;

      this.setCurrentIndexByName(this.currentName || this.active);
      this.setLine();
      this.$nextTick(function () {
        _this.scrollIntoView(true);
      });
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed) {
        (0, _scroll.setRootScrollTop)(Math.ceil((0, _scroll.getElementTop)(this.$el) - this.offsetTop));
      }
    }
  },
  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  methods: {
    onShow: function onShow() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.inited = true;

        _this2.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this3.$refs.titles;

        if (!titles || !titles[_this3.currentIndex] || _this3.type !== 'line' || (0, _style.isHidden)(_this3.$el)) {
          return;
        }

        var title = titles[_this3.currentIndex].$el;
        var lineWidth = _this3.lineWidth,
            lineHeight = _this3.lineHeight;
        var width = (0, _utils.isDef)(lineWidth) ? lineWidth : title.offsetWidth / 2;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: (0, _utils.addUnit)(width),
          backgroundColor: _this3.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this3.duration + "s";
        }

        if ((0, _utils.isDef)(lineHeight)) {
          var height = (0, _utils.addUnit)(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this3.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if ((0, _utils.isDef)(currentIndex) && currentIndex !== this.currentIndex) {
        var shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$children$index = this.children[index],
          title = _this$children$index.title,
          disabled = _this$children$index.disabled,
          computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.$emit('click', computedName, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      (0, _utils2.scrollLeftTo)(nav, to, immediate ? 0 : this.duration);
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.$refs.titles[index].renderTitle(el);
      });
    },
    onScroll: function onScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    }
  },
  render: function render() {
    var _this5 = this,
        _ref;

    var h = arguments[0];
    var type = this.type,
        ellipsis = this.ellipsis,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      return h(_Title.default, {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "title": item.title,
          "color": _this5.color,
          "isActive": index === _this5.currentIndex,
          "ellipsis": ellipsis,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this5.titleActiveColor,
          "inactiveColor": _this5.titleInactiveColor,
          "swipeThreshold": _this5.swipeThreshold
        },
        "on": {
          "click": function click() {
            _this5.onClick(index);

            (0, _router.route)(item.$router, item);
          }
        }
      });
    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [bem('wrap', {
        scrollable: scrollable
      }), (_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = type === 'line' && this.border, _ref)]
    }, [h("div", {
      "ref": "nav",
      "attrs": {
        "role": "tablist"
      },
      "class": bem('nav', [type]),
      "style": this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": bem('line'),
      "style": this.lineStyle
    }), this.slots('nav-right')])]);
    return h("div", {
      "class": bem([type])
    }, [this.sticky ? h(_sticky.default, {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop
      },
      "on": {
        "scroll": this.onScroll
      }
    }, [Wrap]) : Wrap, h(_Content.default, {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex
      },
      "on": {
        "change": this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"./utils":1571651193471,"../utils/router":1571651193431,"../utils/dom/style":1571651193472,"../mixins/relation":1571651193447,"../mixins/bind-event":1571651193440,"../utils/constant":1571651193406,"../utils/dom/scroll":1571651193414,"./Title":1571651193473,"./Content":1571651193474,"../sticky":1571651193475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193471, function(require, module, exports) {


exports.__esModule = true;
exports.scrollLeftTo = scrollLeftTo;

var _raf = require("../utils/dom/raf");

function scrollLeftTo(el, to, duration) {
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      (0, _raf.raf)(animate);
    }
  }

  animate();
}
}, function(modId) { var map = {"../utils/dom/raf":1571651193457}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193472, function(require, module, exports) {


exports.__esModule = true;
exports.isHidden = isHidden;

function isHidden(element) {
  return window.getComputedStyle(element).display === 'none' || element.offsetParent === null;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193473, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var bem = (0, _utils.createNamespace)('tab')[1];
var _default = {
  props: {
    type: String,
    color: String,
    title: String,
    isActive: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: Number
  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
          isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + "%";
      }

      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    renderTitle: function renderTitle(el) {
      var title = this.$refs.title;
      title.innerHTML = '';
      title.appendChild(el);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "tab",
        "aria-selected": this.isActive
      },
      "class": bem({
        active: this.isActive,
        disabled: this.disabled,
        complete: !this.ellipsis
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("span", {
      "ref": "title",
      "class": {
        'van-ellipsis': this.ellipsis
      }
    }, [this.title])]);
  }
};
exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193474, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _touch = require("../mixins/touch");

var _createNamespace = (0, _utils.createNamespace)('tabs'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;

var _default = createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    renderChildren: function renderChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem('content', {
        animated: this.animated
      }),
      "on": (0, _extends2.default)({}, this.listeners)
    }, [this.renderChildren()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/touch":1571651193409}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193475, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _bindEvent = require("../mixins/bind-event");

var _scroll = require("../utils/dom/scroll");

var _createNamespace = (0, _utils.createNamespace)('sticky'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind) {
    if (!this.scroller) {
      this.scroller = (0, _scroll.getScrollEventTarget)(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: Number,
    container: null,
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if ((0, _utils.isDef)(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = this.offsetTop + "px";
      }

      if (this.transform) {
        style.transform = "translate3d(0, " + this.transform + "px, 0)";
      }

      return style;
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      this.height = this.$el.offsetHeight;
      var container = this.container,
          offsetTop = this.offsetTop;
      var scrollTop = (0, _scroll.getScrollTop)(window);
      var topToPageTop = (0, _scroll.getElementTop)(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  },
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + "px" : null
    };
    return h("div", {
      "style": style
    }, [h("div", {
      "class": bem({
        fixed: fixed
      }),
      "style": this.style
    }, [this.slots()])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/bind-event":1571651193440,"../utils/dom/scroll":1571651193414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193476, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _TimePicker = _interopRequireDefault(require("./TimePicker"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _createNamespace = (0, _utils.createNamespace)('datetime-picker'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: (0, _extends2.default)({}, _TimePicker.default.props, {}, _DatePicker.default.props),
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? _TimePicker.default : _DatePicker.default;
    return h(Component, {
      "class": bem(),
      "props": (0, _extends2.default)({}, this.$props),
      "on": (0, _extends2.default)({}, this.$listeners)
    });
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"./TimePicker":1571651193477,"./DatePicker":1571651193480}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193477, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _string = require("../utils/format/string");

var _number = require("../utils/format/number");

var _shared = require("./shared");

var _createNamespace = (0, _utils.createNamespace)('time-picker'),
    createComponent = _createNamespace[0];

var _default = createComponent({
  mixins: [_shared.TimePickerMixin],
  props: (0, _extends2.default)({}, _shared.sharedProps, {
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  }),
  computed: {
    ranges: function ranges() {
      return [{
        type: 'hour',
        range: [this.minHour, this.maxHour]
      }, {
        type: 'minute',
        range: [this.minMinute, this.maxMinute]
      }];
    }
  },
  watch: {
    filter: 'updateInnerValue',
    minHour: 'updateInnerValue',
    maxHour: 'updateInnerValue',
    minMinute: 'updateInnerValue',
    maxMinute: 'updateInnerValue',
    value: function value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue(val);
      }
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!value) {
        value = (0, _string.padZero)(this.minHour) + ":" + (0, _string.padZero)(this.minMinute);
      }

      var _value$split = value.split(':'),
          hour = _value$split[0],
          minute = _value$split[1];

      hour = (0, _string.padZero)((0, _number.range)(hour, this.minHour, this.maxHour));
      minute = (0, _string.padZero)((0, _number.range)(minute, this.minMinute, this.maxMinute));
      return hour + ":" + minute;
    },
    updateInnerValue: function updateInnerValue() {
      var indexes = this.$refs.picker.getIndexes();
      var hour = this.originColumns[0].values[indexes[0]];
      var minute = this.originColumns[1].values[indexes[1]];
      var value = hour + ":" + minute;
      this.innerValue = this.formatValue(value);
    },
    onChange: function onChange(picker) {
      var _this = this;

      this.updateInnerValue();
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue() {
      var _this2 = this;

      var formatter = this.formatter;
      var pair = this.innerValue.split(':');
      var values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    }
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/format/string":1571651193400,"../utils/format/number":1571651193427,"./shared":1571651193478}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193478, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TimePickerMixin = exports.sharedProps = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("./utils");

var _string = require("../utils/format/string");

var _shared = require("../picker/shared");

var _picker = _interopRequireDefault(require("../picker"));

var sharedProps = (0, _extends2.default)({}, _shared.pickerProps, {
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    }
  }
});
exports.sharedProps = sharedProps;
var TimePickerMixin = {
  data: function data() {
    return {
      innerValue: this.formatValue(this.value)
    };
  },
  computed: {
    originColumns: function originColumns() {
      var _this = this;

      return this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = (0, _utils.times)(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = (0, _string.padZero)(rangeArr[0] + index);
          return value;
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    },
    columns: function columns() {
      var _this2 = this;

      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this2.formatter(column.type, value);
          })
        };
      });
    }
  },
  watch: {
    columns: 'updateColumnValue',
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    }
  },
  mounted: function mounted() {
    this.updateColumnValue();
  },
  methods: {
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var props = {};
    Object.keys(_shared.pickerProps).forEach(function (key) {
      props[key] = _this3[key];
    });
    return h(_picker.default, {
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": this.onCancel
      },
      "props": (0, _extends2.default)({}, props)
    });
  }
};
exports.TimePickerMixin = TimePickerMixin;
}, function(modId) { var map = {"./utils":1571651193479,"../utils/format/string":1571651193400,"../picker/shared":1571651193425,"../picker":1571651193423}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193479, function(require, module, exports) {


exports.__esModule = true;
exports.times = times;
exports.getTrueValue = getTrueValue;
exports.getMonthEndDay = getMonthEndDay;

var _number = require("../utils/validate/number");

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

function getTrueValue(value) {
  if (!value) {
    return;
  }

  while ((0, _number.isNaN)(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return;
    }
  }

  return parseInt(value, 10);
}

function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
}, function(modId) { var map = {"../utils/validate/number":1571651193404}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193480, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _date = require("../utils/validate/date");

var _string = require("../utils/format/string");

var _utils2 = require("./utils");

var _shared = require("./shared");

var currentYear = new Date().getFullYear();

var _createNamespace = (0, _utils.createNamespace)('date-picker'),
    createComponent = _createNamespace[0];

var _default2 = createComponent({
  mixins: [_shared.TimePickerMixin],
  props: (0, _extends2.default)({}, _shared.sharedProps, {
    type: {
      type: String,
      default: 'datetime'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: _date.isDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: _date.isDate
    }
  }),
  watch: {
    filter: 'updateInnerValue',
    minDate: 'updateInnerValue',
    maxDate: 'updateInnerValue',
    value: function value(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.innerValue.valueOf()) {
        this.innerValue = val;
      }
    }
  },
  computed: {
    ranges: function ranges() {
      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!(0, _date.isDate)(value)) {
        value = this.minDate;
      }

      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = (0, _utils2.getMonthEndDay)(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + "Year"] = year, _ref[type + "Month"] = month, _ref[type + "Date"] = date, _ref[type + "Hour"] = hour, _ref[type + "Minute"] = minute, _ref;
    },
    updateInnerValue: function updateInnerValue() {
      var _this = this;

      var indexes = this.$refs.picker.getIndexes();

      var getValue = function getValue(index) {
        return (0, _utils2.getTrueValue)(_this.originColumns[index].values[indexes[index]]);
      };

      var year = getValue(0);
      var month = getValue(1);
      var maxDate = (0, _utils2.getMonthEndDay)(year, month);
      var date;

      if (this.type === 'year-month') {
        date = 1;
      } else {
        date = getValue(2);
      }

      date = date > maxDate ? maxDate : date;
      var hour = 0;
      var minute = 0;

      if (this.type === 'datetime') {
        hour = getValue(3);
        minute = getValue(4);
      }

      var value = new Date(year, month - 1, date, hour, minute);
      this.innerValue = this.formatValue(value);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      this.updateInnerValue();
      this.$nextTick(function () {
        _this2.$nextTick(function () {
          _this2.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue() {
      var _this3 = this;

      var value = this.innerValue;
      var formatter = this.formatter;
      var values = [formatter('year', "" + value.getFullYear()), formatter('month', (0, _string.padZero)(value.getMonth() + 1)), formatter('day', (0, _string.padZero)(value.getDate()))];

      if (this.type === 'datetime') {
        values.push(formatter('hour', (0, _string.padZero)(value.getHours())), formatter('minute', (0, _string.padZero)(value.getMinutes())));
      }

      if (this.type === 'year-month') {
        values = values.slice(0, 2);
      }

      this.$nextTick(function () {
        _this3.$refs.picker.setValues(values);
      });
    }
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/validate/date":1571651193481,"../utils/format/string":1571651193400,"./utils":1571651193479,"./shared":1571651193478}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193481, function(require, module, exports) {


exports.__esModule = true;
exports.isDate = isDate;

var _number = require("./number");

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !(0, _number.isNaN)(date.getTime());
}
}, function(modId) { var map = {"./number":1571651193404}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193482, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _createNamespace = (0, _utils.createNamespace)('divider'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Divider(h, props, slots, ctx) {
  var _bem;

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "role": "separator"
    },
    "style": {
      borderColor: props.borderColor
    },
    "class": bem((_bem = {
      dashed: props.dashed,
      hairline: props.hairline
    }, _bem["content-" + props.contentPosition] = slots.default, _bem))
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default()]);
}

Divider.props = {
  dashed: Boolean,
  hairline: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: String,
    default: 'center'
  }
};

var _default = createComponent(Divider);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193483, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _cell = _interopRequireDefault(require("../cell"));

var _icon = _interopRequireDefault(require("../icon"));

var _popup = _interopRequireDefault(require("../popup"));

var _portal = require("../mixins/portal");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('dropdown-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default2 = createComponent({
  mixins: [(0, _portal.PortalMixin)({
    ref: 'wrapper'
  }), (0, _relation.ChildrenMixin)('vanDropdownMenu')],
  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false
    };
  },
  computed: {
    displayTitle: function displayTitle() {
      var _this = this;

      if (this.title) {
        return this.title;
      }

      var match = this.options.filter(function (option) {
        return option.value === _this.value;
      });
      return match.length ? match[0].text : '';
    }
  },
  methods: {
    toggle: function toggle(show, options) {
      if (show === void 0) {
        show = !this.showPopup;
      }

      if (options === void 0) {
        options = {};
      }

      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    var createEmitter = function createEmitter(eventName) {
      return function () {
        return _this2.$emit(eventName);
      };
    };

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var _this$parent = this.parent,
        zIndex = _this$parent.zIndex,
        offset = _this$parent.offset,
        overlay = _this$parent.overlay,
        duration = _this$parent.duration,
        direction = _this$parent.direction,
        activeColor = _this$parent.activeColor,
        closeOnClickOverlay = _this$parent.closeOnClickOverlay;
    var Options = this.options.map(function (option) {
      var active = option.value === _this3.value;
      return h(_cell.default, {
        "attrs": {
          "clickable": true,
          "icon": option.icon,
          "title": option.text
        },
        "key": option.value,
        "class": bem('option', {
          active: active
        }),
        "style": {
          color: active ? activeColor : ''
        },
        "on": {
          "click": function click() {
            _this3.showPopup = false;

            if (option.value !== _this3.value) {
              _this3.$emit('input', option.value);

              _this3.$emit('change', option.value);
            }
          }
        }
      }, [active && h(_icon.default, {
        "class": bem('icon'),
        "attrs": {
          "color": activeColor,
          "name": "success"
        }
      })]);
    });
    var style = {
      zIndex: zIndex
    };

    if (direction === 'down') {
      style.top = offset + "px";
    } else {
      style.bottom = offset + "px";
    }

    return h("div", [h("div", {
      "directives": [{
        name: "show",
        value: this.showWrapper
      }],
      "ref": "wrapper",
      "style": style,
      "class": bem([direction])
    }, [h(_popup.default, {
      "attrs": {
        "overlay": overlay,
        "position": direction === 'down' ? 'top' : 'bottom',
        "duration": this.transition ? duration : 0,
        "closeOnClickOverlay": closeOnClickOverlay,
        "overlayStyle": {
          position: 'absolute'
        }
      },
      "class": bem('content'),
      "on": {
        "open": this.onOpen,
        "close": this.onClose,
        "opened": this.onOpened,
        "closed": function closed() {
          _this3.showWrapper = false;

          _this3.$emit('closed');
        }
      },
      "model": {
        value: _this3.showPopup,
        callback: function callback($$v) {
          _this3.showPopup = $$v;
        }
      }
    }, [Options, this.slots('default')])])]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../cell":1571651193429,"../icon":1571651193415,"../popup":1571651193418,"../mixins/portal":1571651193410,"../mixins/relation":1571651193447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193484, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _relation = require("../mixins/relation");

var _clickOutside = require("../mixins/click-outside");

var _createNamespace = (0, _utils.createNamespace)('dropdown-menu'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanDropdownMenu'), (0, _clickOutside.ClickOutsideMixin)({
    event: 'click',
    method: 'onClickOutside'
  })],
  props: {
    activeColor: String,
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 0.2
    },
    direction: {
      type: String,
      default: 'down'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      offset: 0
    };
  },
  methods: {
    updateOffset: function updateOffset() {
      var menu = this.$refs.menu;
      var rect = menu.getBoundingClientRect();

      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }
    },
    toggleItem: function toggleItem(active) {
      this.children.forEach(function (item, index) {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    },
    onClickOutside: function onClickOutside() {
      this.children.forEach(function (item) {
        item.toggle(false);
      });
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var Titles = this.children.map(function (item, index) {
      return h("div", {
        "attrs": {
          "role": "button",
          "tabindex": item.disabled ? -1 : 0
        },
        "class": bem('item', {
          disabled: item.disabled
        }),
        "on": {
          "click": function click() {
            if (!item.disabled) {
              _this.toggleItem(index);
            }
          }
        }
      }, [h("span", {
        "class": [bem('title', {
          active: item.showPopup,
          down: item.showPopup === (_this.direction === 'down')
        }), item.titleClass],
        "style": {
          color: item.showPopup ? _this.activeColor : ''
        }
      }, [h("div", {
        "class": "van-ellipsis"
      }, [item.displayTitle])])]);
    });
    return h("div", {
      "ref": "menu",
      "class": [bem(), _constant.BORDER_TOP_BOTTOM]
    }, [Titles, this.slots('default')]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../mixins/relation":1571651193447,"../mixins/click-outside":1571651193485}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193485, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ClickOutsideMixin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _event = require("../utils/dom/event");

/**
 * Listen to click outside event
 */
var ClickOutsideMixin = function ClickOutsideMixin(config) {
  return _vue.default.extend({
    props: {
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      var _this = this;

      var clickOutsideHandler = function clickOutsideHandler(event) {
        if (_this.closeOnClickOutside && !_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      return {
        clickOutsideHandler: clickOutsideHandler
      };
    },
    mounted: function mounted() {
      (0, _event.on)(document, config.event, this.clickOutsideHandler);
    },
    beforeDestroy: function beforeDestroy() {
      (0, _event.off)(document, config.event, this.clickOutsideHandler);
    }
  });
};

exports.ClickOutsideMixin = ClickOutsideMixin;
}, function(modId) { var map = {"../utils/dom/event":1571651193411}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193486, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('goods-action'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanGoodsAction')],
  props: {
    safeAreaInsetBottom: Boolean
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193487, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _router = require("../utils/router");

var _relation = require("../mixins/relation");

var _button = _interopRequireDefault(require("../button"));

var _createNamespace = (0, _utils.createNamespace)('goods-action-button'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanGoodsAction')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    type: String,
    text: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  }),
  computed: {
    isFirst: function isFirst() {
      var prev = this.parent && this.parent.children[this.index - 1];
      return !prev || prev.$options.name !== this.$options.name;
    },
    isLast: function isLast() {
      var next = this.parent && this.parent.children[this.index + 1];
      return !next || next.$options.name !== this.$options.name;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(_button.default, {
      "class": bem([{
        first: this.isFirst,
        last: this.isLast
      }, this.type]),
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.type,
        "color": this.color,
        "loading": this.loading,
        "disabled": this.disabled
      },
      "on": {
        "click": this.onClick
      }
    }, [this.slots() || this.text]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/router":1571651193431,"../mixins/relation":1571651193447,"../button":1571651193436}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193488, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _router = require("../utils/router");

var _relation = require("../mixins/relation");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('goods-action-icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanGoodsAction')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    text: String,
    icon: String,
    info: [Number, String],
    iconClass: null
  }),
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem(),
      "on": {
        "click": this.onClick
      }
    }, [this.slots('icon') ? h("div", {
      "class": bem('icon')
    }, [this.slots('icon')]) : h(_icon.default, {
      "class": [bem('icon'), this.iconClass],
      "attrs": {
        "tag": "div",
        "info": this.info,
        "name": this.icon
      }
    }), this.slots() || this.text]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/router":1571651193431,"../mixins/relation":1571651193447,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193489, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('grid'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter;

      if (gutter) {
        return {
          paddingLeft: (0, _utils.addUnit)(gutter)
        };
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": this.style,
      "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP] = this.border && !this.gutter, _ref)]
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193490, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _relation = require("../mixins/relation");

var _router = require("../utils/router");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('grid-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanGrid')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    dot: Boolean,
    text: String,
    icon: String,
    info: [Number, String]
  }),
  computed: {
    style: function style() {
      var _this$parent = this.parent,
          square = _this$parent.square,
          gutter = _this$parent.gutter,
          columnNum = _this$parent.columnNum;
      var percent = 100 / columnNum + "%";
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = (0, _utils.addUnit)(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },
    contentStyle: function contentStyle() {
      var _this$parent2 = this.parent,
          square = _this$parent2.square,
          gutter = _this$parent2.gutter;

      if (square && gutter) {
        var gutterValue = (0, _utils.addUnit)(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    },
    renderContent: function renderContent() {
      var h = this.$createElement;
      var slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.slots('icon') || this.icon && h(_icon.default, {
        "attrs": {
          "name": this.icon,
          "dot": this.dot,
          "info": this.info,
          "size": this.parent.iconSize
        },
        "class": bem('icon')
      }), this.slots('text') || this.text && h("span", {
        "class": bem('text')
      }, [this.text])];
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var _this$parent3 = this.parent,
        center = _this$parent3.center,
        border = _this$parent3.border,
        square = _this$parent3.square,
        gutter = _this$parent3.gutter,
        clickable = _this$parent3.clickable;
    return h("div", {
      "class": [bem({
        square: square
      })],
      "style": this.style
    }, [h("div", {
      "style": this.contentStyle,
      "attrs": {
        "role": clickable ? 'button' : null,
        "tabindex": clickable ? 0 : null
      },
      "class": [bem('content', {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter
      }), (_ref = {}, _ref[_constant.BORDER] = border, _ref)],
      "on": {
        "click": this.onClick
      }
    }, [this.renderContent()])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../mixins/relation":1571651193447,"../utils/router":1571651193431,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193491, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _ImagePreview = _interopRequireDefault(require("./ImagePreview"));

var _utils = require("../utils");

var instance;
var defaultConfig = {
  images: [],
  loop: true,
  swipeDuration: 500,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false,
  closeOnPopstate: false
};

var initInstance = function initInstance() {
  instance = new (_vue.default.extend(_ImagePreview.default))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  (0, _extends2.default)(instance, defaultConfig, options);
  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = function () {
  _vue.default.use(_ImagePreview.default);
};

var _default = ImagePreview;
exports.default = _default;
}, function(modId) { var map = {"./ImagePreview":1571651193492,"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193492, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _number = require("../utils/format/number");

var _event = require("../utils/dom/event");

var _popup = require("../mixins/popup");

var _touch = require("../mixins/touch");

var _closeOnPopstate = require("../mixins/close-on-popstate");

var _image = _interopRequireDefault(require("../image"));

var _loading = _interopRequireDefault(require("../loading"));

var _swipe = _interopRequireDefault(require("../swipe"));

var _swipeItem = _interopRequireDefault(require("../swipe-item"));

var _createNamespace = (0, _utils.createNamespace)('image-preview'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getDistance(touches) {
  return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
}

var _default2 = createComponent({
  mixins: [_popup.PopupMixin, _touch.TouchMixin, _closeOnPopstate.CloseOnPopstateMixin],
  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: Number,
      default: 500
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    startPosition: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    overlayClass: {
      type: String,
      default: bem('overlay')
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    this.bindStatus = false;
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0,
      doubleClickTimer: null
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value() {
      this.setActive(this.startPosition);
    },
    startPosition: function startPosition(active) {
      this.setActive(active);
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      var _this = this;

      (0, _event.preventDefault)(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(function () {
            var index = _this.active;

            _this.$emit('close', {
              index: index,
              url: _this.images[index]
            });

            if (!_this.asyncClose) {
              _this.$emit('input', false);
            }

            _this.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onImageTouchStart: function onImageTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onImageTouchMove: function onImageTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        (0, _event.preventDefault)(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = (0, _number.range)(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = (0, _number.range)(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = (0, _number.range)(scale, this.minZoom, this.maxZoom);
      }
    },
    onImageTouchEnd: function onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          (0, _event.preventDefault)(event, true);
        }
      }
    },
    setActive: function setActive(active) {
      this.resetScale();

      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.scale = scale;
      this.moveX = 0;
      this.moveY = 0;
    },
    genIndex: function genIndex() {
      var h = this.$createElement;

      if (this.showIndex) {
        return h("div", {
          "class": bem('index')
        }, [this.slots('index') || this.active + 1 + "/" + this.images.length]);
      }
    },
    genImages: function genImages() {
      var _this2 = this;

      var h = this.$createElement;
      var imageSlots = {
        loading: function loading() {
          return h(_loading.default, {
            "attrs": {
              "type": "spinner"
            }
          });
        }
      };
      return h(_swipe.default, {
        "ref": "swipe",
        "attrs": {
          "loop": this.loop,
          "duration": this.swipeDuration,
          "indicatorColor": "white",
          "initialSwipe": this.startPosition,
          "showIndicators": this.showIndicators
        },
        "on": {
          "change": this.setActive
        }
      }, [this.images.map(function (image, index) {
        return h(_swipeItem.default, [h(_image.default, {
          "attrs": {
            "src": image,
            "fit": "contain",
            "lazyLoad": _this2.lazyLoad
          },
          "class": bem('image'),
          "scopedSlots": imageSlots,
          "style": index === _this2.active ? _this2.imageStyle : null,
          "nativeOn": {
            "touchstart": _this2.onImageTouchStart,
            "touchmove": _this2.onImageTouchMove,
            "touchend": _this2.onImageTouchEnd,
            "touchcancel": _this2.onImageTouchEnd
          }
        })]);
      })]);
    }
  },
  render: function render() {
    var h = arguments[0];

    if (!this.value) {
      return;
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchMove": _event.preventDefault,
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd
      }
    }, [this.genImages(), this.genIndex()])]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/format/number":1571651193427,"../utils/dom/event":1571651193411,"../mixins/popup":1571651193407,"../mixins/touch":1571651193409,"../mixins/close-on-popstate":1571651193439,"../image":1571651193417,"../loading":1571651193419,"../swipe":1571651193493,"../swipe-item":1571651193494}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193493, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _event = require("../utils/dom/event");

var _touch = require("../mixins/touch");

var _bindEvent = require("../mixins/bind-event");

var _raf = require("../utils/dom/raf");

var _number = require("../utils/format/number");

var _createNamespace = (0, _utils.createNamespace)('swipe'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [_touch.TouchMixin, (0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    bind(window, 'resize', this.onResize, true);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        (0, _event.preventDefault)(event, true);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count;

      if (pace) {
        if (this.loop) {
          return (0, _number.range)(active + pace, -1, count);
        }

        return (0, _number.range)(active + pace, 0, count - 1);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = Math.round(offset - currentPosition);

      if (!this.loop) {
        targetOffset = (0, _number.range)(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          emitChange = _ref2.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          swipes = this.swipes,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (swipes[0]) {
          var outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          var outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    swipeTo: function swipeTo(index, options) {
      var _this = this;

      if (options === void 0) {
        options = {};
      }

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      (0, _raf.doubleRaf)(function () {
        var targetIndex;

        if (_this.loop && index === _this.count) {
          targetIndex = _this.active === 0 ? 0 : index;
        } else {
          targetIndex = index % _this.count;
        }

        _this.move({
          pace: targetIndex - _this.active,
          emitChange: true
        });

        if (options.immediate) {
          (0, _raf.doubleRaf)(function () {
            _this.swiping = false;
          });
        } else {
          _this.swiping = false;
        }
      });
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          (0, _raf.doubleRaf)(function () {
            _this2.swiping = false;

            _this2.move({
              pace: 1,
              emitChange: true
            });

            _this2.autoPlay();
          });
        }, autoplay);
      }
    },
    renderIndicator: function renderIndicator() {
      var _this3 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this3.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": bem('track'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots()]), this.renderIndicator()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/event":1571651193411,"../mixins/touch":1571651193409,"../mixins/bind-event":1571651193440,"../utils/dom/raf":1571651193457,"../utils/format/number":1571651193427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193494, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('swipe-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  data: function data() {
    return {
      offset: 0
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render() {
    var h = arguments[0];
    var _this$$parent = this.$parent,
        vertical = _this$$parent.vertical,
        computedWidth = _this$$parent.computedWidth,
        computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
    };
    return h("div", {
      "class": bem(),
      "style": style,
      "on": (0, _extends2.default)({}, this.$listeners)
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193495, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('index-anchor'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanIndexBar', {
    indexKey: 'childrenIndex'
  })],
  props: {
    index: [Number, String]
  },
  data: function data() {
    return {
      top: 0,
      active: false,
      position: 'static'
    };
  },
  computed: {
    sticky: function sticky() {
      return this.active && this.parent.sticky;
    },
    anchorStyle: function anchorStyle() {
      if (this.sticky) {
        return {
          position: this.position,
          zIndex: "" + this.parent.zIndex,
          transform: "translate3d(0, " + this.top + "px, 0)",
          color: this.parent.highlightColor
        };
      }
    }
  },
  mounted: function mounted() {
    this.height = this.$el.offsetHeight;
  },
  methods: {
    scrollIntoView: function scrollIntoView() {
      this.$el.scrollIntoView();
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var sticky = this.sticky;
    return h("div", {
      "style": {
        height: sticky ? this.height + "px" : null
      }
    }, [h("div", {
      "style": this.anchorStyle,
      "class": [bem({
        sticky: sticky
      }), (_ref = {}, _ref[_constant.BORDER_BOTTOM] = sticky, _ref)]
    }, [this.slots('default') || this.index])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193496, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _touch = require("../mixins/touch");

var _relation = require("../mixins/relation");

var _bindEvent = require("../mixins/bind-event");

var _constant = require("../utils/constant");

var _event = require("../utils/dom/event");

var _scroll = require("../utils/dom/scroll");

var _createNamespace = (0, _utils.createNamespace)('index-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default2 = createComponent({
  mixins: [_touch.TouchMixin, (0, _relation.ParentMixin)('vanIndexBar'), (0, _bindEvent.BindEventMixin)(function (bind) {
    if (!this.scroller) {
      this.scroller = (0, _scroll.getScrollEventTarget)(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll);
  })],
  props: {
    sticky: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    highlightColor: {
      type: String,
      default: _constant.GREEN
    },
    stickyOffsetTop: {
      type: Number,
      default: 0
    },
    indexList: {
      type: Array,
      default: function _default() {
        var indexList = [];
        var charCodeOfA = 'A'.charCodeAt(0);

        for (var i = 0; i < 26; i++) {
          indexList.push(String.fromCharCode(charCodeOfA + i));
        }

        return indexList;
      }
    }
  },
  data: function data() {
    return {
      activeAnchorIndex: null
    };
  },
  computed: {
    highlightStyle: function highlightStyle() {
      var highlightColor = this.highlightColor;

      if (highlightColor) {
        /* istanbul ignore else */
        return {
          color: highlightColor
        };
      }
    }
  },
  watch: {
    indexList: function indexList() {
      this.$nextTick(this.onScroll);
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      var scrollTop = (0, _scroll.getScrollTop)(this.scroller);
      var scrollerRect = this.getScrollerRect();
      var rects = this.children.map(function (item) {
        return {
          height: item.height,
          top: _this.getElementTop(item.$el, scrollerRect)
        };
      });
      var active = this.getActiveAnchorIndex(scrollTop, rects);
      this.activeAnchorIndex = this.indexList[active];

      if (this.sticky) {
        var activeItemTop = 0;
        var isReachEdge = false;

        if (active !== -1) {
          activeItemTop = rects[active].top - scrollTop;
          isReachEdge = activeItemTop <= 0;
        }

        this.children.forEach(function (item, index) {
          if (index === active) {
            item.active = true;
            item.position = isReachEdge ? 'fixed' : 'relative';
            item.top = isReachEdge ? _this.stickyOffsetTop + scrollerRect.top : 0;
          } else if (index === active - 1) {
            item.active = !isReachEdge;
            item.position = 'relative';
            item.top = item.$el.parentElement.offsetHeight - item.height;
          } else {
            item.active = false;
            item.position = 'static';
          }
        });
      }
    },
    getScrollerRect: function getScrollerRect() {
      var scroller = this.scroller;
      var scrollerRect = {
        top: 0,
        left: 0
      };

      if (scroller.getBoundingClientRect) {
        scrollerRect = scroller.getBoundingClientRect();
      }

      return scrollerRect;
    },
    getElementTop: function getElementTop(ele, scrollerRect) {
      var scroller = this.scroller;

      if (scroller === window || scroller === document.body) {
        return (0, _scroll.getElementTop)(ele);
      }

      var eleRect = ele.getBoundingClientRect();
      return eleRect.top - scrollerRect.top + (0, _scroll.getScrollTop)(scroller);
    },
    getActiveAnchorIndex: function getActiveAnchorIndex(scrollTop, rects) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;

        if (scrollTop + prevHeight + this.stickyOffsetTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    },
    onClick: function onClick(event) {
      this.scrollToElement(event.target);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        (0, _event.preventDefault)(event);
        var _event$touches$ = event.touches[0],
            clientX = _event$touches$.clientX,
            clientY = _event$touches$.clientY;
        var target = document.elementFromPoint(clientX, clientY);

        if (target) {
          var index = target.dataset.index;
          /* istanbul ignore else */

          if (this.touchActiveIndex !== index) {
            this.touchActiveIndex = index;
            this.scrollToElement(target);
          }
        }
      }
    },
    scrollToElement: function scrollToElement(element) {
      var index = element.dataset.index;

      if (!index) {
        return;
      }

      var match = this.children.filter(function (item) {
        return String(item.index) === index;
      });

      if (match[0]) {
        match[0].scrollIntoView();

        if (this.stickyOffsetTop) {
          (0, _scroll.setRootScrollTop)((0, _scroll.getRootScrollTop)() - this.stickyOffsetTop);
        }

        this.$emit('select', match[0].index);
      }
    },
    onTouchEnd: function onTouchEnd() {
      this.active = null;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var Indexes = this.indexList.map(function (index) {
      var active = index === _this2.activeAnchorIndex;
      return h("span", {
        "class": bem('index', {
          active: active
        }),
        "style": active ? _this2.highlightStyle : null,
        "attrs": {
          "data-index": index
        }
      }, [index]);
    });
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('sidebar'),
      "style": {
        zIndex: this.zIndex + 1
      },
      "on": {
        "click": this.onClick,
        "touchstart": this.touchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [Indexes]), this.slots('default')]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/touch":1571651193409,"../mixins/relation":1571651193447,"../mixins/bind-event":1571651193440,"../utils/constant":1571651193406,"../utils/dom/event":1571651193411,"../utils/dom/scroll":1571651193414}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193497, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

var _default = _vueLazyload.default;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193498, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _style = require("../utils/dom/style");

var _bindEvent = require("../mixins/bind-event");

var _scroll = require("../utils/dom/scroll");

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var _default = createComponent({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind) {
    if (!this.scroller) {
      this.scroller = (0, _scroll.getScrollEventTarget)(this.$el);
    }

    bind(this.scroller, 'scroll', this.check);
  })],
  model: {
    prop: 'loading'
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  mounted: function mounted() {
    if (this.immediateCheck) {
      this.check();
    }
  },
  watch: {
    loading: 'check',
    finished: 'check'
  },
  methods: {
    check: function check() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.loading || _this.finished || _this.error) {
          return;
        }

        var el = _this.$el,
            scroller = _this.scroller,
            offset = _this.offset,
            direction = _this.direction;
        var scrollerRect;

        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight
          };
        }

        var scrollerHeight = scrollerRect.bottom - scrollerRect.top;
        /* istanbul ignore next */

        if (!scrollerHeight || (0, _style.isHidden)(el)) {
          return false;
        }

        var isReachEdge = false;

        var placeholderRect = _this.$refs.placeholder.getBoundingClientRect();

        if (direction === 'up') {
          isReachEdge = placeholderRect.top - scrollerRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
        }

        if (isReachEdge) {
          _this.$emit('input', true);

          _this.$emit('load');
        }
      });
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.check();
    }
  },
  render: function render() {
    var h = arguments[0];
    var Placeholder = h("div", {
      "ref": "placeholder",
      "class": bem('placeholder')
    });
    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "feed",
        "aria-busy": this.loading
      }
    }, [this.direction === 'down' ? this.slots() : Placeholder, this.loading && h("div", {
      "class": bem('loading'),
      "key": "loading"
    }, [this.slots('loading') || h(_loading.default, {
      "attrs": {
        "size": "16"
      }
    }, [this.loadingText || t('loading')])]), this.finished && this.finishedText && h("div", {
      "class": bem('finished-text')
    }, [this.finishedText]), this.error && this.errorText && h("div", {
      "on": {
        "click": this.clickErrorText
      },
      "class": bem('error-text')
    }, [this.errorText]), this.direction === 'up' ? this.slots() : Placeholder]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/style":1571651193472,"../mixins/bind-event":1571651193440,"../utils/dom/scroll":1571651193414,"../loading":1571651193419}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193499, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('nav-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function NavBar(h, props, slots, ctx) {
  var _ref;

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem({
      fixed: props.fixed
    }), (_ref = {}, _ref[_constant.BORDER_BOTTOM] = props.border, _ref)],
    "style": {
      zIndex: props.zIndex
    }
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || _utils.noop
    }
  }, [slots.left ? slots.left() : [props.leftArrow && h(_icon.default, {
    "class": bem('arrow'),
    "attrs": {
      "name": "arrow-left"
    }
  }), props.leftText && h("span", {
    "class": bem('text')
  }, [props.leftText])]]), h("div", {
    "class": [bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || _utils.noop
    }
  }, [slots.right ? slots.right() : props.rightText && h("span", {
    "class": bem('text')
  }, [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};

var _default = createComponent(NavBar);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/constant":1571651193406,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193500, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('notice-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [Number, String],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close', event);
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = bem('play--infinite');
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var slots = this.slots,
        mode = this.mode,
        leftIcon = this.leftIcon,
        onClickIcon = this.onClickIcon;
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };

    function LeftIcon() {
      var slot = slots('left-icon');

      if (slot) {
        return slot;
      }

      if (leftIcon) {
        return h(_icon.default, {
          "class": bem('left-icon'),
          "attrs": {
            "name": leftIcon
          }
        });
      }
    }

    function RightIcon() {
      var slot = slots('right-icon');

      if (slot) {
        return slot;
      }

      var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';

      if (iconName) {
        return h(_icon.default, {
          "class": bem('right-icon'),
          "attrs": {
            "name": iconName
          },
          "on": {
            "click": onClickIcon
          }
        });
      }
    }

    return h("div", {
      "attrs": {
        "role": "alert"
      },
      "directives": [{
        name: "show",
        value: this.showNoticeBar
      }],
      "class": bem({
        wrapable: this.wrapable
      }),
      "style": barStyle,
      "on": {
        "click": function click(event) {
          _this3.$emit('click', event);
        }
      }
    }, [LeftIcon(), h("div", {
      "ref": "wrap",
      "class": bem('wrap'),
      "attrs": {
        "role": "marquee"
      }
    }, [h("div", {
      "ref": "content",
      "class": [bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable && !this.wrapable
      }],
      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [this.slots() || this.text])]), RightIcon()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193501, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Notify = _interopRequireDefault(require("./Notify"));

var _constant = require("../utils/constant");

var _utils = require("../utils");

var _functional = require("../utils/functional");

var timer;
var instance;

function parseOptions(message) {
  return (0, _utils.isObj)(message) ? message : {
    message: message
  };
}

function Notify(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    instance = (0, _functional.mount)(_Notify.default, {
      on: {
        click: function click(event) {
          if (instance.onClick) {
            instance.onClick(event);
          }
        },
        close: function close() {
          if (instance.onClose) {
            instance.onClose();
          }
        },
        opened: function opened() {
          if (instance.onOpened) {
            instance.onOpened();
          }
        }
      }
    });
  }

  options = (0, _extends2.default)({}, Notify.currentOptions, {}, parseOptions(options));
  (0, _extends2.default)(instance, options);
  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    type: 'danger',
    value: true,
    message: '',
    color: _constant.WHITE,
    background: undefined,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null
  };
}

Notify.clear = function () {
  if (instance) {
    instance.value = false;
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = function (options) {
  (0, _extends2.default)(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = defaultOptions();
};

Notify.install = function () {
  _vue.default.use(_Notify.default);
};

_vue.default.prototype.$notify = Notify;
var _default = Notify;
exports.default = _default;
}, function(modId) { var map = {"./Notify":1571651193502,"../utils/constant":1571651193406,"../utils":1571651193393,"../utils/functional":1571651193405}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193502, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _functional = require("../utils/functional");

var _popup = require("../mixins/popup");

var _popup2 = _interopRequireDefault(require("../popup"));

var _createNamespace = (0, _utils.createNamespace)('notify'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Notify(h, props, slots, ctx) {
  var style = {
    color: props.color,
    background: props.background
  };
  return h(_popup2.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "value": props.value,
      "position": "top",
      "overlay": false,
      "duration": 0.2,
      "lockScroll": false
    },
    "style": style,
    "class": [bem([props.type]), props.className]
  }, (0, _functional.inherit)(ctx, true)]), [props.message]);
}

Notify.props = (0, _extends2.default)({}, _popup.PopupMixin.props, {
  background: String,
  className: null,
  message: [Number, String],
  getContainer: [String, Function],
  type: {
    type: String,
    default: 'danger'
  },
  color: {
    type: String,
    default: _constant.WHITE
  },
  duration: {
    type: Number,
    default: 3000
  }
});

var _default = createComponent(Notify);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../utils/functional":1571651193405,"../mixins/popup":1571651193407,"../popup":1571651193418}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193503, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _event = require("../utils/dom/event");

var _constant = require("../utils/constant");

var _bindEvent = require("../mixins/bind-event");

var _Key = _interopRequireDefault(require("./Key"));

var _createNamespace = (0, _utils.createNamespace)('number-keyboard'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var CLOSE_KEY_THEME = ['blue', 'big'];
var DELETE_KEY_THEME = ['delete', 'big', 'gray'];

var _default = createComponent({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind) {
    if (this.hideOnClickOutside) {
      bind(document.body, 'touchstart', this.onBlur);
    }
  })],
  model: {
    event: 'update:value'
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: ''
    },
    extraKey: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            theme: ['gray'],
            type: 'extra'
          }, {
            text: 0
          }, {
            text: this.deleteText,
            theme: ['gray'],
            type: 'delete'
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            theme: ['middle']
          }, {
            text: this.extraKey,
            type: 'extra'
          });
          break;
      }

      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || t('delete');
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text, type) {
      if (text === '') {
        return;
      }

      var value = this.value;

      if (type === 'delete') {
        this.$emit('delete');
        this.$emit('update:value', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        this.onClose();
      } else if (value.length < this.maxlength) {
        this.$emit('input', text);
        this.$emit('update:value', value + text);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var title = this.title,
        theme = this.theme,
        onPress = this.onPress,
        closeButtonText = this.closeButtonText;
    var titleLeftSlot = this.slots('title-left');
    var showTitleClose = closeButtonText && theme === 'default';
    var showTitle = title || showTitleClose || titleLeftSlot;
    var Title = showTitle && h("div", {
      "class": [bem('title'), _constant.BORDER_TOP]
    }, [titleLeftSlot && h("span", {
      "class": bem('title-left')
    }, [titleLeftSlot]), title && h("span", [title]), showTitleClose && h("span", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem('close'),
      "on": {
        "click": this.onClose
      }
    }, [closeButtonText])]);
    var Keys = this.keys.map(function (key) {
      return h(_Key.default, {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type,
          "theme": key.theme
        },
        "on": {
          "press": onPress
        }
      }, [key.type === 'delete' && _this.slots('delete'), key.type === 'extra' && _this.slots('extra-key')]);
    });
    var Sidebar = theme === 'custom' && h("div", {
      "class": bem('sidebar')
    }, [h(_Key.default, {
      "attrs": {
        "text": this.deleteText,
        "type": "delete",
        "theme": DELETE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    }, [this.slots('delete')]), h(_Key.default, {
      "attrs": {
        "text": closeButtonText,
        "type": "close",
        "theme": CLOSE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : ''
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "style": {
        zIndex: this.zIndex
      },
      "class": bem([theme, {
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      }]),
      "on": {
        "touchstart": _event.stopPropagation,
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [Title, h("div", {
      "class": bem('body')
    }, [Keys, Sidebar])])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/event":1571651193411,"../utils/constant":1571651193406,"../mixins/bind-event":1571651193440,"./Key":1571651193504}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193504, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _touch = require("../mixins/touch");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('key'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default2 = createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return bem(classNames);
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      // compatible with Vue 2.6 event bubble bug
      event.stopPropagation();
      this.touchStart(event);
      this.active = true;
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction) {
        this.active = false;
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.active) {
        this.active = false;
        this.$emit('press', this.text, this.type);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("i", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": [_constant.BORDER, this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots('default') || this.text]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/touch":1571651193409,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193505, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('pagination'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

var _default = createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    value: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      default: 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    select: function select(page, emitChange) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value, true);
      };
    };

    return h("ul", {
      "class": bem({
        simple: simple
      })
    }, [h("li", {
      "class": [bem('item', {
        disabled: value === 1
      }), bem('prev'), _constant.BORDER],
      "on": {
        "click": onSelect(value - 1)
      }
    }, [this.prevText || t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [bem('item', {
          active: page.active
        }), bem('page'), _constant.BORDER],
        "on": {
          "click": onSelect(page.number)
        }
      }, [page.text]);
    }), simple && h("li", {
      "class": bem('page-desc')
    }, [this.slots('pageDesc') || value + "/" + this.count]), h("li", {
      "class": [bem('item', {
        disabled: value === this.count
      }), bem('next'), _constant.BORDER],
      "on": {
        "click": onSelect(value + 1)
      }
    }, [this.nextText || t('next')])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193506, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _cell = _interopRequireDefault(require("../cell"));

var _cellGroup = _interopRequireDefault(require("../cell-group"));

var _createNamespace = (0, _utils.createNamespace)('panel'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(_cell.default, {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": bem('header-value')
      },
      "class": bem('header')
    }), h("div", {
      "class": bem('content')
    }, [slots.default && slots.default()]), slots.footer && h("div", {
      "class": [bem('footer'), _constant.BORDER_TOP]
    }, [slots.footer()])];
  };

  return h(_cellGroup.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "scopedSlots": {
      default: Content
    }
  }, (0, _functional.inherit)(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};

var _default = createComponent(Panel);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/constant":1571651193406,"../cell":1571651193429,"../cell-group":1571651193453}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193507, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('password-input'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function PasswordInput(h, props, slots, ctx) {
  var _ref;

  var info = props.errorInfo || props.info;
  var Points = [];

  for (var i = 0; i < props.length; i++) {
    var _class;

    var _char = props.value[i];
    var showBorder = i !== 0 && !props.gutter;
    var showCursor = props.focused && i === props.value.length;
    var style = void 0;

    if (i !== 0 && props.gutter) {
      style = {
        marginLeft: (0, _utils.addUnit)(props.gutter)
      };
    }

    Points.push(h("li", {
      "class": (_class = {}, _class[_constant.BORDER_LEFT] = showBorder, _class),
      "style": style
    }, [props.mask ? h("i", {
      "style": {
        visibility: _char ? 'visible' : 'hidden'
      }
    }) : _char, showCursor && h("div", {
      "class": bem('cursor')
    })]));
  }

  return h("div", {
    "class": bem()
  }, [h("ul", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem('security'), (_ref = {}, _ref[_constant.BORDER_SURROUND] = !props.gutter, _ref)],
    "on": {
      "touchstart": function touchstart(event) {
        event.stopPropagation();
        (0, _functional.emit)(ctx, 'focus', event);
      }
    }
  }, (0, _functional.inherit)(ctx, true)]), [Points]), info && h("div", {
    "class": bem(props.errorInfo ? 'error-info' : 'info')
  }, [info])]);
}

PasswordInput.props = {
  info: String,
  gutter: [Number, String],
  focused: Boolean,
  errorInfo: String,
  mask: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
};

var _default = createComponent(PasswordInput);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193508, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('progress'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    strokeWidth: [String, Number],
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: _constant.BLUE
    },
    textColor: {
      type: String,
      default: _constant.WHITE
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  mounted: function mounted() {
    this.setWidth();
  },
  watch: {
    showPivot: 'setWidth',
    pivotText: 'setWidth'
  },
  methods: {
    setWidth: function setWidth() {
      var _this = this;

      this.$nextTick(function () {
        _this.progressWidth = _this.$el.offsetWidth;
        _this.pivotWidth = _this.$refs.pivot ? _this.$refs.pivot.offsetWidth : 0;
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var pivotText = this.pivotText,
        percentage = this.percentage;
    var text = (0, _utils.isDef)(pivotText) ? pivotText : percentage + '%';
    var showPivot = this.showPivot && text;
    var background = this.inactive ? '#cacaca' : this.color;
    var pivotStyle = {
      color: this.textColor,
      left: (this.progressWidth - this.pivotWidth) * percentage / 100 + "px",
      background: this.pivotColor || background
    };
    var portionStyle = {
      background: background,
      width: this.progressWidth * percentage / 100 + 'px'
    };
    var wrapperStyle;

    if (this.strokeWidth) {
      wrapperStyle = {
        height: (0, _utils.addUnit)(this.strokeWidth)
      };
    }

    return h("div", {
      "class": bem(),
      "style": wrapperStyle
    }, [h("span", {
      "class": bem('portion'),
      "style": portionStyle
    }, [showPivot && h("span", {
      "ref": "pivot",
      "style": pivotStyle,
      "class": bem('pivot')
    }, [text])])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193509, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _event = require("../utils/dom/event");

var _touch = require("../mixins/touch");

var _scroll = require("../utils/dom/scroll");

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('pull-refresh'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var TEXT_STATUS = ['pulling', 'loosing', 'success'];

var _default = createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      default: 500
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      distance: 0,
      duration: 0
    };
  },
  computed: {
    untouchable: function untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled;
    }
  },
  watch: {
    value: function value(loading) {
      var _this = this;

      this.duration = this.animationDuration;

      if (!loading && this.successText) {
        this.status = 'success';
        setTimeout(function () {
          _this.setStatus(0);
        }, this.successDuration);
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading);
      }
    }
  },
  mounted: function mounted() {
    this.scrollEl = (0, _scroll.getScrollEventTarget)(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY));
          (0, _event.preventDefault)(event);
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this2 = this;

      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true); // ensure value change can be watched

          this.$nextTick(function () {
            _this2.$emit('refresh');
          });
        } else {
          this.setStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = (0, _scroll.getScrollTop)(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(distance) {
      var headHeight = this.headHeight;
      return Math.round(distance < headHeight ? distance : distance < headHeight * 2 ? headHeight + (distance - headHeight) / 2 : headHeight * 1.5 + (distance - headHeight * 2) / 4);
    },
    setStatus: function setStatus(distance, isLoading) {
      this.distance = distance;
      var status = isLoading ? 'loading' : distance === 0 ? 'normal' : distance < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var status = this.status,
        distance = this.distance;
    var text = this[status + "Text"] || t(status);
    var style = {
      transitionDuration: this.duration + "ms",
      transform: this.distance ? "translate3d(0," + this.distance + "px, 0)" : ''
    };
    var Status = this.slots(status, {
      distance: distance
    }) || [TEXT_STATUS.indexOf(status) !== -1 && h("div", {
      "class": bem('text')
    }, [text]), status === 'loading' && h(_loading.default, {
      "attrs": {
        "size": "16"
      }
    }, [text])];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('track'),
      "style": style,
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("div", {
      "class": bem('head')
    }, [Status]), this.slots()])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/event":1571651193411,"../mixins/touch":1571651193409,"../utils/dom/scroll":1571651193414,"../loading":1571651193419}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193510, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _event = require("../utils/dom/event");

var _touch = require("../mixins/touch");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('rate'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }

  return 'void';
}

var _default = createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    size: [Number, String],
    gutter: [Number, String],
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    value: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    touchable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    list: function list() {
      var list = [];

      for (var i = 1; i <= this.count; i++) {
        list.push(getRateStatus(this.value, i, this.allowHalf));
      }

      return list;
    },
    sizeWithUnit: function sizeWithUnit() {
      return (0, _utils.addUnit)(this.size);
    },
    gutterWithUnit: function gutterWithUnit() {
      return (0, _utils.addUnit)(this.gutter);
    }
  },
  methods: {
    select: function select(index) {
      if (!this.disabled && !this.readonly && index !== this.value) {
        this.$emit('input', index);
        this.$emit('change', index);
      }
    },
    onTouchStart: function onTouchStart(event) {
      var _this = this;

      if (this.readonly || this.disabled || !this.touchable) {
        return;
      }

      this.touchStart(event);
      var rects = this.$refs.items.map(function (item) {
        return item.getBoundingClientRect();
      });
      var ranges = [];
      rects.forEach(function (rect, index) {
        if (_this.allowHalf) {
          ranges.push({
            score: index + 0.5,
            left: rect.left
          }, {
            score: index + 1,
            left: rect.left + rect.width / 2
          });
        } else {
          ranges.push({
            score: index + 1,
            left: rect.left
          });
        }
      });
      this.ranges = ranges;
    },
    onTouchMove: function onTouchMove(event) {
      if (this.readonly || this.disabled || !this.touchable) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        (0, _event.preventDefault)(event);
        var clientX = event.touches[0].clientX;
        this.select(this.getScoreByPosition(clientX));
      }
    },
    getScoreByPosition: function getScoreByPosition(x) {
      for (var i = this.ranges.length - 1; i > 0; i--) {
        if (x > this.ranges[i].left) {
          return this.ranges[i].score;
        }
      }

      return this.allowHalf ? 0.5 : 1;
    },
    renderStar: function renderStar(status, index) {
      var _this2 = this;

      var h = this.$createElement;
      var icon = this.icon,
          color = this.color,
          count = this.count,
          voidIcon = this.voidIcon,
          disabled = this.disabled,
          voidColor = this.voidColor,
          disabledColor = this.disabledColor;
      var score = index + 1;
      var isFull = status === 'full';
      var isVoid = status === 'void';
      var style;

      if (this.gutterWithUnit && score !== count) {
        style = {
          paddingRight: this.gutterWithUnit
        };
      }

      return h("div", {
        "ref": "items",
        "refInFor": true,
        "key": index,
        "attrs": {
          "role": "radio",
          "tabindex": "0",
          "aria-setsize": count,
          "aria-posinset": score,
          "aria-checked": String(!isVoid)
        },
        "style": style,
        "class": bem('item')
      }, [h(_icon.default, {
        "attrs": {
          "size": this.sizeWithUnit,
          "name": isFull ? icon : voidIcon,
          "data-score": score,
          "color": disabled ? disabledColor : isFull ? color : voidColor
        },
        "class": bem('icon'),
        "on": {
          "click": function click() {
            _this2.select(score);
          }
        }
      }), this.allowHalf && h(_icon.default, {
        "attrs": {
          "size": this.sizeWithUnit,
          "name": isVoid ? voidIcon : icon,
          "data-score": score - 0.5,
          "color": disabled ? disabledColor : isVoid ? voidColor : color
        },
        "class": bem('icon', 'half'),
        "on": {
          "click": function click() {
            _this2.select(score - 0.5);
          }
        }
      })]);
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "attrs": {
        "tabindex": "0",
        "role": "radiogroup"
      },
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove
      }
    }, [this.list.map(function (status, index) {
      return _this3.renderStar(status, index);
    })]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/event":1571651193411,"../mixins/touch":1571651193409,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193511, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('row'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var align = this.align,
        justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin
    } : {};
    return h(this.tag, {
      "style": style,
      "class": bem((_bem = {
        flex: flex
      }, _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193512, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _event = require("../utils/dom/event");

var _field = _interopRequireDefault(require("../field"));

var _createNamespace = (0, _utils.createNamespace)('search'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": bem('label')
      }, [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      if (slots.action) {
        return;
      }

      (0, _functional.emit)(ctx, 'input', '');
      (0, _functional.emit)(ctx, 'cancel');
    }

    return h("div", {
      "class": bem('action'),
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "on": {
        "click": onCancel
      }
    }, [slots.action ? slots.action() : props.actionText || t('cancel')]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: (0, _extends2.default)({}, ctx.listeners, {
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          (0, _event.preventDefault)(event);
          (0, _functional.emit)(ctx, 'search', props.value);
        }

        (0, _functional.emit)(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = (0, _functional.inherit)(ctx);
  delete inheritData.attrs;
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [h("div", {
    "class": bem('content', props.shape)
  }, [Label(), h(_field.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable
    },
    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  actionText: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  }
};

var _default = createComponent(Search);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../utils/dom/event":1571651193411,"../field":1571651193428}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193513, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('sidebar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanSidebar')],
  model: {
    prop: 'activeKey'
  },
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193514, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _router = require("../utils/router");

var _info = _interopRequireDefault(require("../info"));

var _createNamespace = (0, _utils.createNamespace)('sidebar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanSidebar')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    dot: Boolean,
    info: [Number, String],
    title: String,
    disabled: Boolean
  }),
  computed: {
    select: function select() {
      return this.index === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      (0, _router.route)(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("a", {
      "class": bem({
        select: this.select,
        disabled: this.disabled
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('text')
    }, [this.title, h(_info.default, {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      },
      "class": bem('info')
    })])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447,"../utils/router":1571651193431,"../info":1571651193416}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193515, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _createNamespace = (0, _utils.createNamespace)('skeleton'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var DEFAULT_ROW_WIDTH = '100%';
var DEFAULT_LAST_ROW_WIDTH = '60%';

function Skeleton(h, props, slots, ctx) {
  if (!props.loading) {
    return slots.default && slots.default();
  }

  function Title() {
    if (props.title) {
      return h("h3", {
        "class": bem('title'),
        "style": {
          width: (0, _utils.addUnit)(props.titleWidth)
        }
      });
    }
  }

  function Rows() {
    var Rows = [];
    var rowWidth = props.rowWidth;

    function getRowWidth(index) {
      if (rowWidth === DEFAULT_ROW_WIDTH && index === props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    }

    for (var i = 0; i < props.row; i++) {
      Rows.push(h("div", {
        "class": bem('row'),
        "style": {
          width: (0, _utils.addUnit)(getRowWidth(i))
        }
      }));
    }

    return Rows;
  }

  function Avatar() {
    if (props.avatar) {
      var size = (0, _utils.addUnit)(props.avatarSize);
      return h("div", {
        "class": bem('avatar', props.avatarShape),
        "style": {
          width: size,
          height: size
        }
      });
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      animate: props.animate
    })
  }, (0, _functional.inherit)(ctx)]), [Avatar(), h("div", {
    "class": bem('content')
  }, [Title(), Rows()])]);
}

Skeleton.props = {
  title: Boolean,
  avatar: Boolean,
  row: {
    type: Number,
    default: 0
  },
  loading: {
    type: Boolean,
    default: true
  },
  animate: {
    type: Boolean,
    default: true
  },
  avatarSize: {
    type: String,
    default: '32px'
  },
  avatarShape: {
    type: String,
    default: 'round'
  },
  titleWidth: {
    type: [Number, String],
    default: '40%'
  },
  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH
  }
};

var _default = createComponent(Skeleton);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193516, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _lang = _interopRequireDefault(require("./lang"));

var _locale = _interopRequireDefault(require("../locale"));

var _Sku = _interopRequireDefault(require("./Sku"));

var _SkuActions = _interopRequireDefault(require("./components/SkuActions"));

var _SkuHeader = _interopRequireDefault(require("./components/SkuHeader"));

var _SkuHeaderItem = _interopRequireDefault(require("./components/SkuHeaderItem"));

var _SkuMessages = _interopRequireDefault(require("./components/SkuMessages"));

var _SkuStepper = _interopRequireDefault(require("./components/SkuStepper"));

var _SkuRow = _interopRequireDefault(require("./components/SkuRow"));

var _SkuRowItem = _interopRequireDefault(require("./components/SkuRowItem"));

var _skuHelper = _interopRequireDefault(require("./utils/skuHelper"));

var _constants = _interopRequireDefault(require("./constants"));

_locale.default.add(_lang.default);

_Sku.default.SkuActions = _SkuActions.default;
_Sku.default.SkuHeader = _SkuHeader.default;
_Sku.default.SkuHeaderItem = _SkuHeaderItem.default;
_Sku.default.SkuMessages = _SkuMessages.default;
_Sku.default.SkuStepper = _SkuStepper.default;
_Sku.default.SkuRow = _SkuRow.default;
_Sku.default.SkuRowItem = _SkuRowItem.default;
_Sku.default.skuHelper = _skuHelper.default;
_Sku.default.skuConstants = _constants.default;
var _default = _Sku.default;
exports.default = _default;
}, function(modId) { var map = {"./lang":1571651193517,"../locale":1571651193397,"./Sku":1571651193518,"./components/SkuActions":1571651193532,"./components/SkuHeader":1571651193519,"./components/SkuHeaderItem":1571651193520,"./components/SkuMessages":1571651193527,"./components/SkuStepper":1571651193525,"./components/SkuRow":1571651193521,"./components/SkuRowItem":1571651193522,"./utils/skuHelper":1571651193523,"./constants":1571651193524}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193517, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

/**
 * Sku only provide zh-CN lang by default
 */
var _default = {
  'zh-CN': {
    vanSku: {
      select: '选择',
      selected: '已选',
      selectSku: '请先选择商品规格',
      soldout: '库存不足',
      originPrice: '原价',
      minusTip: '至少选择一件',
      unavailable: '商品已经无法购买啦',
      stock: '剩余',
      stockUnit: '件',
      quotaLimit: function quotaLimit(quota) {
        return "\u6BCF\u4EBA\u9650\u8D2D" + quota + "\u4EF6";
      },
      quotaCount: function quotaCount(count) {
        return "\u4F60\u5DF2\u8D2D\u4E70" + count + "\u4EF6";
      }
    },
    vanSkuActions: {
      buy: '立即购买',
      addCart: '加入购物车'
    },
    vanSkuImgUploader: {
      oversize: function oversize(maxSize) {
        return "\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8";
      },
      fail: '上传失败<br />重新上传'
    },
    vanSkuStepper: {
      num: '购买数量'
    },
    vanSkuMessages: {
      fill: '请填写',
      upload: '请上传',
      imageLabel: '仅限一张',
      invalid: {
        tel: '请填写正确的数字格式留言',
        mobile: '手机号长度为6-20位数字',
        email: '请填写正确的邮箱',
        id_no: '请填写正确的身份证号码'
      },
      placeholder: {
        id_no: '输入身份证号码',
        text: '输入文本',
        tel: '输入数字',
        email: '输入邮箱',
        date: '点击选择日期',
        time: '点击选择时间',
        textarea: '点击填写段落文本',
        mobile: '输入手机号码'
      }
    }
  }
};
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193518, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _popup = _interopRequireDefault(require("../popup"));

var _toast = _interopRequireDefault(require("../toast"));

var _imagePreview = _interopRequireDefault(require("../image-preview"));

var _SkuHeader = _interopRequireDefault(require("./components/SkuHeader"));

var _SkuHeaderItem = _interopRequireDefault(require("./components/SkuHeaderItem"));

var _SkuRow = _interopRequireDefault(require("./components/SkuRow"));

var _SkuRowItem = _interopRequireDefault(require("./components/SkuRowItem"));

var _SkuStepper = _interopRequireDefault(require("./components/SkuStepper"));

var _SkuMessages = _interopRequireDefault(require("./components/SkuMessages"));

var _SkuActions = _interopRequireDefault(require("./components/SkuActions"));

var _utils = require("../utils");

var _skuHelper = require("./utils/skuHelper");

var _constants = require("./constants");

var namespace = (0, _utils.createNamespace)('sku');
var createComponent = namespace[0],
    bem = namespace[1],
    t = namespace[2];
var QUOTA_LIMIT = _constants.LIMIT_TYPE.QUOTA_LIMIT;

var _default2 = createComponent({
  props: {
    sku: Object,
    priceTag: String,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    hideStock: Boolean,
    addCartText: String,
    stepperTitle: String,
    getContainer: Function,
    hideQuotaText: Boolean,
    hideSelectedText: Boolean,
    resetStepperOnHide: Boolean,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    safeAreaInsetBottom: Boolean,
    resetSelectedSkuOnHide: Boolean,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    stockThreshold: {
      type: Number,
      default: 50
    },
    showSoldoutSku: {
      type: Boolean,
      default: true
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        this.$emit('sku-close', {
          selectedSkuValues: this.selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.resetStepper();
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: 'resetSelectedSku',
    initialSku: function initialSku() {
      this.resetStepper();
      this.resetSelectedSku(this.skuTree);
    }
  },
  computed: {
    skuGroupClass: function skuGroupClass() {
      return ['van-sku-group-container', {
        'van-sku-group-container--hide-soldout': !this.showSoldoutSku
      }];
    },
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return (0, _skuHelper.isAllSelected)(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      }

      if (this.isSkuCombSelected) {
        return (0, _skuHelper.getSkuComb)(this.sku.list, this.selectedSku);
      }

      return null;
    },
    selectedSkuValues: function selectedSkuValues() {
      return (0, _skuHelper.getSelectedSkuValues)(this.skuTree, this.selectedSku);
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    originPrice: function originPrice() {
      if (this.selectedSkuComb && this.selectedSkuComb.origin_price) {
        return (this.selectedSkuComb.origin_price / 100).toFixed(2);
      }

      return this.sku.origin_price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    },
    imageList: function imageList() {
      var imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        this.skuTree.forEach(function (treeItem) {
          if (!treeItem.v) {
            return;
          }

          treeItem.v.forEach(function (vItem) {
            var img = vItem.previewImgUrl || vItem.imgUrl || vItem.img_url;

            if (img) {
              imageList.push(img);
            }
          });
        });
      }

      return imageList;
    },
    stock: function stock() {
      var stockNum = this.customStepperConfig.stockNum;

      if (stockNum !== undefined) {
        return stockNum;
      }

      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.sku.stock_num;
    },
    stockText: function stockText() {
      var h = this.$createElement;
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return [t('stock') + " ", h("span", {
        "class": bem('stock-num', {
          highlight: this.stock < this.stockThreshold
        })
      }, [this.stock]), " " + t('stockUnit')];
    },
    quotaText: function quotaText() {
      var _this$customStepperCo = this.customStepperConfig,
          quotaText = _this$customStepperCo.quotaText,
          hideQuotaText = _this$customStepperCo.hideQuotaText;
      if (hideQuotaText) return '';
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = t('quotaLimit', this.quota);
      }

      return text;
    },
    selectedText: function selectedText() {
      var _this = this;

      if (this.selectedSkuComb) {
        return t('selected') + " " + this.selectedSkuValues.map(function (item) {
          return item.name;
        }).join('；');
      }

      var unselected = this.skuTree.filter(function (item) {
        return _this.selectedSku[item.k_s] === _constants.UNSELECTED_SKU_VALUE_ID;
      }).map(function (item) {
        return item.k;
      }).join('；');
      return t('select') + " " + unselected;
    }
  },
  created: function created() {
    var skuEventBus = new _vue.default();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetStepper();
    this.resetSelectedSku(this.skuTree); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetStepper: function resetStepper() {
      var skuStepper = this.$refs.skuStepper;
      var selectedNum = this.initialSku.selectedNum;
      var num = (0, _utils.isDef)(selectedNum) ? selectedNum : 1;

      if (skuStepper) {
        skuStepper.setCurrentNum(num);
      } else {
        this.selectedNum = num;
      }
    },
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this2 = this;

      this.selectedSku = {}; // 重置 selectedSku

      skuTree.forEach(function (item) {
        _this2.selectedSku[item.k_s] = _this2.initialSku[item.k_s] || _constants.UNSELECTED_SKU_VALUE_ID;
      }); // 只有一个 sku 规格值时默认选中

      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && (0, _skuHelper.isSkuChoosable)(_this2.sku.list, _this2.selectedSku, {
          key: key,
          valueId: valueId
        })) {
          _this2.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return t('unavailable');
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return t('selectSku');
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? (0, _extends4.default)({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = _constants.UNSELECTED_SKU_VALUE_ID, _extends2)) : (0, _extends4.default)({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onPreviewImage: function onPreviewImage(indexImage) {
      var _this3 = this;

      var index = this.imageList.findIndex(function (image) {
        return image === indexImage;
      });
      var params = {
        index: index,
        imageList: this.imageList,
        indexImage: indexImage
      };
      this.$emit('open-preview', params);
      (0, _imagePreview.default)({
        images: this.imageList,
        startPosition: index,
        closeOnPopstate: true,
        onClose: function onClose() {
          _this3.$emit('close-preview', params);
        }
      });
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        (0, _toast.default)(t('minusTip'));
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          var msg = t('quotaLimit', quota);
          if (quotaUsed > 0) msg += "\uFF0C" + t('quotaCount', quotaUsed);
          (0, _toast.default)(msg);
        } else {
          (0, _toast.default)(t('soldout'));
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();

      if (error) {
        (0, _toast.default)(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    if (this.isSkuEmpty) {
      return;
    }

    var sku = this.sku,
        goods = this.goods,
        price = this.price,
        originPrice = this.originPrice,
        skuEventBus = this.skuEventBus,
        selectedSku = this.selectedSku,
        selectedNum = this.selectedNum,
        stepperTitle = this.stepperTitle,
        hideQuotaText = this.hideQuotaText,
        selectedSkuComb = this.selectedSkuComb;
    var slotsProps = {
      price: price,
      originPrice: originPrice,
      selectedNum: selectedNum,
      skuEventBus: skuEventBus,
      selectedSku: selectedSku,
      selectedSkuComb: selectedSkuComb
    };

    var slots = function slots(name) {
      return _this4.slots(name, slotsProps);
    };

    var Header = slots('sku-header') || h(_SkuHeader.default, {
      "attrs": {
        "sku": sku,
        "goods": goods,
        "skuEventBus": skuEventBus,
        "selectedSku": selectedSku
      }
    }, [slots('sku-header-price') || h("div", {
      "class": "van-sku__goods-price"
    }, [h("span", {
      "class": "van-sku__price-symbol"
    }, ["\uFFE5"]), h("span", {
      "class": "van-sku__price-num"
    }, [price]), this.priceTag && h("span", {
      "class": "van-sku__price-tag"
    }, [this.priceTag])]), slots('sku-header-origin-price') || originPrice && h(_SkuHeaderItem.default, [t('originPrice'), " \uFFE5", originPrice]), !this.hideStock && h(_SkuHeaderItem.default, [h("span", {
      "class": "van-sku__stock"
    }, [this.stockText]), !hideQuotaText && this.quotaText && h("span", {
      "class": "van-sku__quota"
    }, ["(", this.quotaText, ")"])]), this.hasSku && !this.hideSelectedText && h(_SkuHeaderItem.default, [this.selectedText]), slots('sku-header-extra')]);
    var Group = slots('sku-group') || this.hasSku && h("div", {
      "class": this.skuGroupClass
    }, [this.skuTree.map(function (skuTreeItem) {
      return h(_SkuRow.default, {
        "attrs": {
          "skuRow": skuTreeItem
        }
      }, [skuTreeItem.v.map(function (skuValue) {
        return h(_SkuRowItem.default, {
          "attrs": {
            "skuList": sku.list,
            "skuValue": skuValue,
            "selectedSku": selectedSku,
            "skuEventBus": skuEventBus,
            "skuKeyStr": skuTreeItem.k_s
          }
        });
      })]);
    })]);
    var Stepper = slots('sku-stepper') || h(_SkuStepper.default, {
      "ref": "skuStepper",
      "attrs": {
        "stock": this.stock,
        "quota": this.quota,
        "quotaUsed": this.quotaUsed,
        "skuEventBus": skuEventBus,
        "selectedNum": selectedNum,
        "selectedSku": selectedSku,
        "stepperTitle": stepperTitle,
        "skuStockNum": sku.stock_num,
        "disableStepperInput": this.disableStepperInput,
        "customStepperConfig": this.customStepperConfig
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('stepper-change', event);
        }
      }
    });
    var Messages = slots('sku-messages') || h(_SkuMessages.default, {
      "ref": "skuMessages",
      "attrs": {
        "goodsId": this.goodsId,
        "messageConfig": this.messageConfig,
        "messages": sku.messages
      }
    });
    var Actions = slots('sku-actions') || h(_SkuActions.default, {
      "attrs": {
        "buyText": this.buyText,
        "skuEventBus": skuEventBus,
        "addCartText": this.addCartText,
        "showAddCartBtn": this.showAddCartBtn
      }
    });
    return h(_popup.default, {
      "attrs": {
        "round": true,
        "closeable": true,
        "position": "bottom",
        "getContainer": this.getContainer,
        "closeOnClickOverlay": this.closeOnClickOverlay,
        "safeAreaInsetBottom": this.safeAreaInsetBottom
      },
      "class": "van-sku-container",
      "model": {
        value: _this4.show,
        callback: function callback($$v) {
          _this4.show = $$v;
        }
      }
    }, [Header, h("div", {
      "class": "van-sku-body",
      "style": this.bodyStyle
    }, [slots('sku-body-top'), Group, slots('extra-sku-group'), Stepper, Messages]), Actions]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../popup":1571651193418,"../toast":1571651193434,"../image-preview":1571651193491,"./components/SkuHeader":1571651193519,"./components/SkuHeaderItem":1571651193520,"./components/SkuRow":1571651193521,"./components/SkuRowItem":1571651193522,"./components/SkuStepper":1571651193525,"./components/SkuMessages":1571651193527,"./components/SkuActions":1571651193532,"../utils":1571651193393,"./utils/skuHelper":1571651193523,"./constants":1571651193524}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193519, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _constant = require("../../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('sku-header'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getSkuImg(sku, selectedSku) {
  var img;
  sku.tree.some(function (item) {
    var id = selectedSku[item.k_s];

    if (id && item.v) {
      var matchedSku = item.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0] || {};
      img = matchedSku.previewImgUrl || matchedSku.imgUrl || matchedSku.img_url;
      return img;
    }

    return false;
  });
  return img;
}

function SkuHeader(h, props, slots, ctx) {
  var sku = props.sku,
      goods = props.goods,
      skuEventBus = props.skuEventBus,
      selectedSku = props.selectedSku;
  var goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  var previewImage = function previewImage() {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem(), _constant.BORDER_BOTTOM]
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('img-wrap'),
    "on": {
      "click": previewImage
    }
  }, [h("img", {
    "attrs": {
      "src": goodsImg
    }
  })]), h("div", {
    "class": bem('goods-info')
  }, [slots.default && slots.default()])]);
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object
};

var _default = createComponent(SkuHeader);

exports.default = _default;
}, function(modId) { var map = {"../../utils":1571651193393,"../../utils/functional":1571651193405,"../../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193520, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _createNamespace = (0, _utils.createNamespace)('sku-header-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuHeader(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [slots.default && slots.default()]);
}

var _default = createComponent(SkuHeader);

exports.default = _default;
}, function(modId) { var map = {"../../utils":1571651193393,"../../utils/functional":1571651193405}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193521, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _constant = require("../../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('sku-row'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem(), _constant.BORDER_BOTTOM]
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('title')
  }, [props.skuRow.k]), slots.default && slots.default()]);
}

SkuRow.props = {
  skuRow: Object
};

var _default = createComponent(SkuRow);

exports.default = _default;
}, function(modId) { var map = {"../../utils":1571651193393,"../../utils/functional":1571651193405,"../../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193522, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../../utils");

var _skuHelper = require("../utils/skuHelper");

var _createNamespace = (0, _utils.createNamespace)('sku-row-item'),
    createComponent = _createNamespace[0];

var _default2 = createComponent({
  props: {
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object,
    skuList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    choosable: function choosable() {
      return (0, _skuHelper.isSkuChoosable)(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', (0, _extends2.default)({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    var imgUrl = this.skuValue.imgUrl || this.skuValue.img_url;
    return h("span", {
      "class": ['van-sku-row__item', {
        'van-sku-row__item--active': choosed,
        'van-sku-row__item--disabled': !this.choosable
      }],
      "on": {
        "click": this.onSelect
      }
    }, [imgUrl && h("img", {
      "class": "van-sku-row__item-img",
      "attrs": {
        "src": imgUrl
      }
    }), h("span", {
      "class": "van-sku-row__item-name"
    }, [this.skuValue.name])]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../../utils":1571651193393,"../utils/skuHelper":1571651193523}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193523, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.isSkuChoosable = exports.getSelectedSkuValues = exports.getSkuComb = exports.isAllSelected = exports.normalizeSkuTree = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _constants = require("../constants");

/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */
var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中


exports.normalizeSkuTree = normalizeSkuTree;

var isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== _constants.UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
}; // 根据已选择的 sku 获取 skuComb


exports.isAllSelected = isAllSelected;

var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (item) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(item[skuKeyStr]) === String(selectedSku[skuKeyStr]);
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称


exports.getSkuComb = getSkuComb;

var getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== _constants.UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (value) {
        return value.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选


exports.getSelectedSkuValues = getSelectedSkuValues;

var isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = (0, _extends3.default)({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中

  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== _constants.UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};

exports.isSkuChoosable = isSkuChoosable;
var _default = {
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: getSelectedSkuValues,
  isAllSelected: isAllSelected,
  isSkuChoosable: isSkuChoosable
};
exports.default = _default;
}, function(modId) { var map = {"../constants":1571651193524}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193524, function(require, module, exports) {


exports.__esModule = true;
exports.default = exports.UNSELECTED_SKU_VALUE_ID = exports.LIMIT_TYPE = void 0;
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
exports.LIMIT_TYPE = LIMIT_TYPE;
var UNSELECTED_SKU_VALUE_ID = '';
exports.UNSELECTED_SKU_VALUE_ID = UNSELECTED_SKU_VALUE_ID;
var _default = {
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
};
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193525, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils");

var _stepper = _interopRequireDefault(require("../../stepper"));

var _constants = require("../constants");

var namespace = (0, _utils.createNamespace)('sku-stepper');
var createComponent = namespace[0];
var t = namespace[2];
var QUOTA_LIMIT = _constants.LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = _constants.LIMIT_TYPE.STOCK_LIMIT;

var _default = createComponent({
  props: {
    stock: Number,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedNum: Number,
    stepperTitle: String,
    disableStepperInput: Boolean,
    customStepperConfig: Object,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },
  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },
  computed: {
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },
  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", {
      "class": "van-sku-stepper-stock"
    }, [h("div", {
      "class": "van-sku-stepper-container"
    }, [h("div", {
      "class": "van-sku__stepper-title"
    }, [this.stepperTitle || t('num')]), h(_stepper.default, {
      "class": "van-sku__stepper",
      "attrs": {
        "max": this.stepperLimit,
        "disableInput": this.disableStepperInput
      },
      "on": {
        "overlimit": this.onOverLimit,
        "change": this.onChange
      },
      "model": {
        value: _this.currentNum,
        callback: function callback($$v) {
          _this.currentNum = $$v;
        }
      }
    })])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../../utils":1571651193393,"../../stepper":1571651193526,"../constants":1571651193524}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193526, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _resetScroll = require("../utils/dom/reset-scroll");

var _event = require("../utils/dom/event");

var _createNamespace = (0, _utils.createNamespace)('stepper'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;

function equal(value1, value2) {
  return String(value1) === String(value2);
} // add num and avoid float number


function add(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

var _default = createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disableInput: Boolean,
    decimalLength: Number,
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var defaultValue = (0, _utils.isDef)(this.value) ? this.value : this.defaultValue;
    var value = this.format(defaultValue);

    if (!equal(value, this.value)) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    },
    inputStyle: function inputStyle() {
      var style = {};

      if (this.inputWidth) {
        style.width = (0, _utils.addUnit)(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = (0, _utils.addUnit)(this.buttonSize);
      }

      return style;
    },
    buttonStyle: function buttonStyle() {
      if (this.buttonSize) {
        var size = (0, _utils.addUnit)(this.buttonSize);
        return {
          width: size,
          height: size
        };
      }
    }
  },
  watch: {
    value: function value(val) {
      if (!equal(val, this.currentValue)) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    filter: function filter(value) {
      value = String(value).replace(/[^0-9.-]/g, '');

      if (this.integer && value.indexOf('.') !== -1) {
        value = value.split('.')[0];
      }

      return value;
    },
    format: function format(value) {
      value = this.filter(value); // format range

      value = value === '' ? 0 : +value;
      value = Math.max(Math.min(this.max, value), this.min); // format decimal

      if ((0, _utils.isDef)(this.decimalLength)) {
        value = value.toFixed(this.decimalLength);
      }

      return value;
    },
    onInput: function onInput(event) {
      var value = event.target.value; // allow input to be empty

      if (value === '') {
        return;
      }

      var formatted = this.filter(value);

      if (!equal(value, formatted)) {
        event.target.value = formatted;
      }

      this.emitChange(formatted);
    },
    emitChange: function emitChange(value) {
      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        this.currentValue = value;
      }
    },
    onChange: function onChange() {
      var type = this.type;

      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = this.format(add(+this.currentValue, diff));
      this.emitChange(value);
      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      var value = this.format(event.target.value);
      event.target.value = value;
      this.currentValue = value;
      this.$emit('blur', event);
      (0, _resetScroll.resetScroll)();
    },
    longPressStep: function longPressStep() {
      var _this = this;

      this.longPressTimer = setTimeout(function () {
        _this.onChange(_this.type);

        _this.longPressStep(_this.type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart: function onTouchStart() {
      var _this2 = this;

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;
      this.longPressTimer = setTimeout(function () {
        _this2.isLongPress = true;

        _this2.onChange();

        _this2.longPressStep();
      }, LONG_PRESS_START_TIME);
    },
    onTouchEnd: function onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        (0, _event.preventDefault)(event);
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];

    var createListeners = function createListeners(type) {
      return {
        on: {
          click: function click() {
            _this3.type = type;

            _this3.onChange();
          },
          touchstart: function touchstart() {
            _this3.type = type;

            _this3.onTouchStart(type);
          },
          touchend: _this3.onTouchEnd,
          touchcancel: _this3.onTouchEnd
        }
      };
    };

    return h("div", {
      "class": bem()
    }, [h("button", (0, _babelHelperVueJsxMergeProps.default)([{
      "directives": [{
        name: "show",
        value: this.showMinus
      }],
      "style": this.buttonStyle,
      "class": bem('minus', {
        disabled: this.minusDisabled
      })
    }, createListeners('minus')])), h("input", {
      "attrs": {
        "type": "number",
        "role": "spinbutton",
        "aria-valuemax": this.max,
        "aria-valuemin": this.min,
        "aria-valuenow": this.currentValue,
        "disabled": this.disabled || this.disableInput
      },
      "class": bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "style": this.inputStyle,
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur
      }
    }), h("button", (0, _babelHelperVueJsxMergeProps.default)([{
      "directives": [{
        name: "show",
        value: this.showPlus
      }],
      "style": this.buttonStyle,
      "class": bem('plus', {
        disabled: this.plusDisabled
      })
    }, createListeners('plus')]))]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/dom/reset-scroll":1571651193432,"../utils/dom/event":1571651193411}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193527, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils");

var _cell = _interopRequireDefault(require("../../cell"));

var _cellGroup = _interopRequireDefault(require("../../cell-group"));

var _field = _interopRequireDefault(require("../../field"));

var _email = require("../../utils/validate/email");

var _number = require("../../utils/validate/number");

var _SkuImgUploader = _interopRequireDefault(require("./SkuImgUploader"));

var _createNamespace = (0, _utils.createNamespace)('sku-messages'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var _default2 = createComponent({
  props: {
    messages: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      var map = this.messageConfig.placeholderMap || {};
      return message.placeholder || map[type] || t("placeholder." + type);
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') {
            var textType = t(message.type === 'image' ? 'upload' : 'fill');
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !(0, _number.isNumber)(value)) {
            return t('invalid.tel');
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return t('invalid.mobile');
          }

          if (message.type === 'email' && !(0, _email.isEmail)(value)) {
            return t('invalid.email');
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return t('invalid.id_no');
          }
        }
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    return h(_cellGroup.default, {
      "class": bem(),
      "attrs": {
        "border": this.messages.length > 0
      }
    }, [this.messages.map(function (message, index) {
      return message.type === 'image' ? h(_cell.default, {
        "class": bem('image-cell'),
        "attrs": {
          "value-class": bem('image-cell-value'),
          "label": t('imageLabel'),
          "title": message.name,
          "required": String(message.required) === '1'
        },
        "key": _this3.goodsId + "-" + index
      }, [h(_SkuImgUploader.default, {
        "attrs": {
          "uploadImg": _this3.messageConfig.uploadImg,
          "maxSize": _this3.messageConfig.uploadMaxSize
        },
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      })]) : h(_field.default, {
        "attrs": {
          "maxlength": "200",
          "label": message.name,
          "required": String(message.required) === '1',
          "placeholder": _this3.getPlaceholder(message),
          "type": _this3.getType(message)
        },
        "key": _this3.goodsId + "-" + index,
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      });
    })]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../../utils":1571651193393,"../../cell":1571651193429,"../../cell-group":1571651193453,"../../field":1571651193428,"../../utils/validate/email":1571651193528,"../../utils/validate/number":1571651193404,"./SkuImgUploader":1571651193529}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193528, function(require, module, exports) {


exports.__esModule = true;
exports.isEmail = isEmail;

/* eslint-disable */
function isEmail(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193529, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils");

var _icon = _interopRequireDefault(require("../../icon"));

var _loading = _interopRequireDefault(require("../../loading"));

var _uploader = _interopRequireDefault(require("../../uploader"));

var _createNamespace = (0, _utils.createNamespace)('sku-img-uploader'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var _default = createComponent({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片 base64
      paddingImg: '',
      uploadFail: false
    };
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadFail = false;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.uploadFail = true;
      });
    },
    onOversize: function onOversize() {
      this.$toast(t('oversize', this.maxSize));
    },
    renderUploader: function renderUploader(content, disabled) {
      if (disabled === void 0) {
        disabled = false;
      }

      var h = this.$createElement;
      return h(_uploader.default, {
        "class": bem('uploader'),
        "attrs": {
          "disabled": disabled,
          "afterRead": this.afterReadFile,
          "maxSize": this.maxSize * 1024 * 1024
        },
        "on": {
          "oversize": this.onOversize
        }
      }, [h("div", {
        "class": bem('img')
      }, [content])]);
    },
    renderMask: function renderMask() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('mask')
      }, [this.uploadFail ? [h(_icon.default, {
        "attrs": {
          "name": "warning-o",
          "size": "20px"
        }
      }), h("div", {
        "class": bem('warn-text'),
        "domProps": {
          "innerHTML": t('fail')
        }
      })] : h(_loading.default, {
        "attrs": {
          "type": "spinner",
          "size": "20px",
          "color": "white"
        }
      })]);
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.value && this.renderUploader([h("img", {
      "attrs": {
        "src": this.value
      }
    }), h(_icon.default, {
      "attrs": {
        "name": "clear"
      },
      "class": bem('delete'),
      "on": {
        "click": function click() {
          _this2.$emit('input', '');
        }
      }
    })], true), this.paddingImg && this.renderUploader([h("img", {
      "attrs": {
        "src": this.paddingImg
      }
    }), this.renderMask()], !this.uploadFail), !this.value && !this.paddingImg && this.renderUploader(h("div", {
      "class": bem('trigger')
    }, [h(_icon.default, {
      "attrs": {
        "name": "photograph",
        "size": "22px"
      }
    })]))]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../../utils":1571651193393,"../../icon":1571651193415,"../../loading":1571651193419,"../../uploader":1571651193530}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193530, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _utils2 = require("./utils");

var _icon = _interopRequireDefault(require("../icon"));

var _image = _interopRequireDefault(require("../image"));

var _imagePreview = _interopRequireDefault(require("../image-preview"));

var _createNamespace = (0, _utils.createNamespace)('uploader'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default2 = createComponent({
  inheritAttrs: false,
  model: {
    prop: 'fileList'
  },
  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },
  computed: {
    previewSizeWithUnit: function previewSizeWithUnit() {
      return (0, _utils.addUnit)(this.previewSize);
    }
  },
  methods: {
    getDetail: function getDetail(index) {
      if (index === void 0) {
        index = this.fileList.length;
      }

      return {
        name: this.name,
        index: index
      };
    },
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        var response = this.beforeRead(files, this.getDetail());

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response.then(function () {
            _this.readFile(files);
          }).catch(this.resetInput);
          return;
        }
      }

      this.readFile(files);
    },
    readFile: function readFile(files) {
      var _this2 = this;

      var oversize = (0, _utils2.isOversize)(files, this.maxSize);

      if (Array.isArray(files)) {
        var maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(function (file) {
          return (0, _utils2.readFile)(file, _this2.resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            var result = {
              file: file
            };

            if (contents[index]) {
              result.content = contents[index];
            }

            return result;
          });

          _this2.onAfterRead(fileList, oversize);
        });
      } else {
        (0, _utils2.readFile)(files, this.resultType).then(function (content) {
          var result = {
            file: files
          };

          if (content) {
            result.content = content;
          }

          _this2.onAfterRead(result, oversize);
        });
      }
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.getDetail());
        return;
      }

      this.resetInput();
      this.$emit('input', [].concat(this.fileList, (0, _utils2.toArray)(files)));

      if (this.afterRead) {
        this.afterRead(files, this.getDetail());
      }
    },
    onDelete: function onDelete(file, index) {
      var _this3 = this;

      if (this.beforeDelete) {
        var response = this.beforeDelete(file, this.getDetail(index));

        if (!response) {
          return;
        }

        if (response.then) {
          response.then(function () {
            _this3.deleteFile(file, index);
          }).catch(_utils.noop);
          return;
        }
      }

      this.deleteFile(file, index);
    },
    deleteFile: function deleteFile(file, index) {
      var fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file, this.getDetail(index));
    },
    resetInput: function resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },
    onPreviewImage: function onPreviewImage(item) {
      var _this4 = this;

      if (!this.previewFullImage) {
        return;
      }

      var imageFiles = this.fileList.filter(function (item) {
        return (0, _utils2.isImageFile)(item);
      });
      var imageContents = imageFiles.map(function (item) {
        return item.content || item.url;
      });
      (0, _imagePreview.default)({
        images: imageContents,
        closeOnPopstate: true,
        startPosition: imageFiles.indexOf(item),
        onClose: function onClose() {
          _this4.$emit('close-preview');
        }
      });
    },
    renderPreviewItem: function renderPreviewItem(item, index) {
      var _this5 = this;

      var h = this.$createElement;
      var DeleteIcon = h(_icon.default, {
        "attrs": {
          "name": "delete"
        },
        "class": bem('preview-delete'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();

            _this5.onDelete(item, index);
          }
        }
      });
      var Preview = (0, _utils2.isImageFile)(item) ? h(_image.default, {
        "attrs": {
          "fit": this.imageFit,
          "src": item.content || item.url,
          "width": this.previewSize,
          "height": this.previewSize
        },
        "class": bem('preview-image'),
        "on": {
          "click": function click() {
            _this5.onPreviewImage(item);
          }
        }
      }) : h("div", {
        "class": bem('file'),
        "style": {
          width: this.previewSizeWithUnit,
          height: this.previewSizeWithUnit
        }
      }, [h(_icon.default, {
        "class": bem('file-icon'),
        "attrs": {
          "name": "description"
        }
      }), h("div", {
        "class": [bem('file-name'), 'van-ellipsis']
      }, [item.file ? item.file.name : item.url])]);
      return h("div", {
        "class": bem('preview'),
        "on": {
          "click": function click() {
            _this5.$emit('click-preview', item, _this5.getDetail(index));
          }
        }
      }, [Preview, DeleteIcon]);
    },
    renderPreviewList: function renderPreviewList() {
      if (this.previewImage) {
        return this.fileList.map(this.renderPreviewItem);
      }
    },
    renderUpload: function renderUpload() {
      var h = this.$createElement;

      if (this.fileList.length >= this.maxCount) {
        return;
      }

      var slot = this.slots();
      var Input = h("input", {
        "attrs": (0, _extends2.default)({}, this.$attrs, {
          "type": "file",
          "accept": this.accept,
          "disabled": this.disabled
        }),
        "ref": "input",
        "class": bem('input'),
        "on": {
          "change": this.onChange
        }
      });

      if (slot) {
        return h("div", {
          "class": bem('input-wrapper')
        }, [slot, Input]);
      }

      var style;

      if (this.previewSize) {
        var size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size
        };
      }

      return h("div", {
        "class": bem('upload'),
        "style": style
      }, [h(_icon.default, {
        "attrs": {
          "name": "plus"
        },
        "class": bem('upload-icon')
      }), this.uploadText && h("span", {
        "class": bem('upload-text')
      }, [this.uploadText]), Input]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('wrapper')
    }, [this.renderPreviewList(), this.renderUpload()])]);
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"./utils":1571651193531,"../icon":1571651193415,"../image":1571651193417,"../image-preview":1571651193491}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193531, function(require, module, exports) {


exports.__esModule = true;
exports.toArray = toArray;
exports.readFile = readFile;
exports.isOversize = isOversize;
exports.isImageUrl = isImageUrl;
exports.isImageFile = isImageFile;

function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}

function readFile(file, resultType) {
  return new Promise(function (resolve) {
    if (resultType === 'file') {
      resolve();
      return;
    }

    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}

var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}

function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193532, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _button = _interopRequireDefault(require("../../button"));

var _createNamespace = (0, _utils.createNamespace)('sku-actions'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function SkuActions(h, props, slots, ctx) {
  var createEmitter = function createEmitter(name) {
    return function () {
      props.skuEventBus.$emit(name);
    };
  };

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [props.showAddCartBtn && h(_button.default, {
    "attrs": {
      "size": "large",
      "type": "warning",
      "text": props.addCartText || t('addCart')
    },
    "on": {
      "click": createEmitter('sku:addCart')
    }
  }), h(_button.default, {
    "attrs": {
      "size": "large",
      "type": "danger",
      "text": props.buyText || t('buy')
    },
    "on": {
      "click": createEmitter('sku:buy')
    }
  })]);
}

SkuActions.props = {
  buyText: String,
  addCartText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean
};

var _default = createComponent(SkuActions);

exports.default = _default;
}, function(modId) { var map = {"../../utils":1571651193393,"../../utils/functional":1571651193405,"../../button":1571651193436}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193533, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _touch = require("../mixins/touch");

var _event = require("../utils/dom/event");

var _createNamespace = (0, _utils.createNamespace)('slider'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: [Number, String],
      default: 2
    }
  },
  computed: {
    range: function range() {
      return this.max - this.min;
    }
  },
  created: function created() {
    // format initial value
    this.updateValue(this.value);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.dragStatus = 'start';
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }

      (0, _event.preventDefault)(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? this.deltaY : this.deltaX;
      var total = this.vertical ? rect.height : rect.width;
      var diff = delta / total * this.range;
      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = this.vertical ? rect.height : rect.width;
      var value = delta / total * this.range + this.min;
      this.startValue = this.value;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);

      if (value !== this.value) {
        this.$emit('input', value);
      }

      if (end && value !== this.startValue) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },
  render: function render() {
    var _barStyle;

    var h = arguments[0];
    var vertical = this.vertical;
    var style = {
      background: this.inactiveColor
    };
    var mainAxis = vertical ? 'height' : 'width';
    var crossAxis = vertical ? 'width' : 'height';
    var barStyle = (_barStyle = {}, _barStyle[mainAxis] = (this.value - this.min) * 100 / this.range + "%", _barStyle[crossAxis] = (0, _utils.addUnit)(this.barHeight), _barStyle.background = this.activeColor, _barStyle);
    return h("div", {
      "style": style,
      "class": bem({
        disabled: this.disabled,
        vertical: vertical
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('bar'),
      "style": barStyle
    }, [h("div", {
      "attrs": {
        "role": "slider",
        "tabindex": this.disabled ? -1 : 0,
        "aria-valuemin": this.min,
        "aria-valuenow": this.value,
        "aria-valuemax": this.max,
        "aria-orientation": this.vertical ? 'vertical' : 'horizontal'
      },
      "class": bem('button-wrapper'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots('button') || h("div", {
      "class": bem('button')
    })])])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/touch":1571651193409,"../utils/dom/event":1571651193411}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193534, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _relation = require("../mixins/relation");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('step'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanSteps')],
  computed: {
    status: function status() {
      if (this.index < this.parent.active) {
        return 'finish';
      }

      if (this.index === this.parent.active) {
        return 'process';
      }
    }
  },
  methods: {
    genCircle: function genCircle() {
      var h = this.$createElement;
      var _this$parent = this.parent,
          activeIcon = _this$parent.activeIcon,
          activeColor = _this$parent.activeColor,
          inactiveIcon = _this$parent.inactiveIcon;

      if (this.status === 'process') {
        return this.slots('active-icon') || h(_icon.default, {
          "class": bem('icon'),
          "attrs": {
            "name": activeIcon,
            "color": activeColor
          }
        });
      }

      var inactiveIconSlot = this.slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || h(_icon.default, {
          "class": bem('icon'),
          "attrs": {
            "name": inactiveIcon
          }
        });
      }

      return h("i", {
        "class": bem('circle')
      });
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var status = this.status;
    var _this$parent2 = this.parent,
        activeColor = _this$parent2.activeColor,
        direction = _this$parent2.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };
    return h("div", {
      "class": [_constant.BORDER, bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": bem('title'),
      "style": titleStyle
    }, [this.slots()]), h("div", {
      "class": bem('circle-container')
    }, [this.genCircle()]), h("div", {
      "class": bem('line')
    })]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../mixins/relation":1571651193447,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193535, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('steps'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanSteps')],
  props: {
    inactiveIcon: String,
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: _constant.GREEN
    },
    activeIcon: {
      type: String,
      default: 'checked'
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem([this.direction])
    }, [h("div", {
      "class": bem('items')
    }, [this.slots()])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/constant":1571651193406,"../mixins/relation":1571651193447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193536, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('submit-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price,
      tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceText = props.currency + " " + (price / 100).toFixed(props.decimalLength);
      return h("div", {
        "class": bem('text')
      }, [h("span", [props.label || t('label')]), h("span", {
        "class": bem('price')
      }, [priceText]), props.suffixLabel && h("span", {
        "class": bem('suffix-label')
      }, [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": bem('tip')
      }, [tipIcon && h(_icon.default, {
        "class": bem('tip-icon'),
        "attrs": {
          "name": tipIcon
        }
      }), tip && h("span", {
        "class": bem('tip-text')
      }, [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, (0, _functional.inherit)(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": bem('bar')
  }, [slots.default && slots.default(), Text(), h(_button.default, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "class": bem('button'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  }
};

var _default = createComponent(SubmitBar);

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../button":1571651193436,"../icon":1571651193415}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193537, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _number = require("../utils/format/number");

var _event = require("../utils/dom/event");

var _touch = require("../mixins/touch");

var _clickOutside = require("../mixins/click-outside");

var _createNamespace = (0, _utils.createNamespace)('swipe-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var THRESHOLD = 0.15;

var _default = createComponent({
  mixins: [_touch.TouchMixin, (0, _clickOutside.ClickOutsideMixin)({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: ''
    }
  },
  data: function data() {
    return {
      offset: 0,
      dragging: false
    };
  },
  computed: {
    computedLeftWidth: function computedLeftWidth() {
      return this.leftWidth || this.getWidthByRef('left');
    },
    computedRightWidth: function computedRightWidth() {
      return this.rightWidth || this.getWidthByRef('right');
    }
  },
  methods: {
    getWidthByRef: function getWidthByRef(ref) {
      if (this.$refs[ref]) {
        var rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },
    open: function open(position) {
      var offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = (0, _number.range)(offset, -this.computedRightWidth, this.computedLeftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          computedLeftWidth = this.computedLeftWidth,
          computedRightWidth = this.computedRightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction === 'right' && -offset > computedRightWidth * threshold && computedRightWidth > 0) {
        this.open('right'); // left
      } else if (direction === 'left' && offset > computedLeftWidth * threshold && computedLeftWidth > 0) {
        this.open('left'); // reset
      } else {
        this.swipeMove(0);
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.dragging = true;
      this.startOffset = this.offset;
      this.touchStart(event);
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        var shouldPrevent = !this.opened || this.deltaX * this.startOffset < 0;

        if (shouldPrevent) {
          (0, _event.preventDefault)(event, this.stopPropagation);
        }

        this.swipeMove(this.deltaX + this.startOffset);
      }
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.dragging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? 'left' : 'right');
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this, {
          name: this.name
        });
      } else {
        this.swipeMove(0);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var onClick = function onClick(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this.onClick(position);
      };
    };

    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transitionDuration: this.dragging ? '0s' : '.6s'
    };
    return h("div", {
      "class": bem(),
      "on": {
        "click": onClick('cell'),
        "touchstart": this.startDrag,
        "touchmove": this.onDrag,
        "touchend": this.endDrag,
        "touchcancel": this.endDrag
      }
    }, [h("div", {
      "class": bem('wrapper'),
      "style": wrapperStyle,
      "on": {
        "transitionend": function transitionend() {
          _this.swiping = false;
        }
      }
    }, [this.slots('left') && h("div", {
      "ref": "left",
      "class": bem('left'),
      "on": {
        "click": onClick('left', true)
      }
    }, [this.slots('left')]), this.slots(), this.slots('right') && h("div", {
      "ref": "right",
      "class": bem('right'),
      "on": {
        "click": onClick('right', true)
      }
    }, [this.slots('right')])])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/format/number":1571651193427,"../utils/dom/event":1571651193411,"../mixins/touch":1571651193409,"../mixins/click-outside":1571651193485}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193538, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('tabbar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanTabbar')],
  props: {
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem'
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.children.forEach(function (item, index) {
        item.active = (item.name || index) === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": {
        zIndex: this.zIndex
      },
      "class": [(_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = this.border, _ref), bem({
        fixed: this.fixed,
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })]
    }, [this.slots()]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../mixins/relation":1571651193447,"../utils/constant":1571651193406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193539, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _info = _interopRequireDefault(require("../info"));

var _router = require("../utils/router");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('tabbar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanTabbar')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String]
  }),
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to,
          $route = this.$route;

      if (to && $route) {
        var config = (0, _utils.isObj)(to) ? to : {
          path: to
        };
        var pathMatched = config.path === $route.path;
        var nameMatched = (0, _utils.isDef)(config.name) && config.name === $route.name;
        return pathMatched || nameMatched;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
        slots = this.slots;
    var active = this.parent.route ? this.routeActive : this.active;
    var color = this.parent[active ? 'activeColor' : 'inactiveColor'];
    return h("div", {
      "class": bem({
        active: active
      }),
      "style": {
        color: color
      },
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('icon')
    }, [slots('icon', {
      active: active
    }) || icon && h(_icon.default, {
      "attrs": {
        "name": icon
      }
    }), h(_info.default, {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      }
    })]), h("div", {
      "class": bem('text')
    }, [slots('default', {
      active: active
    })])]);
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1571651193393,"../icon":1571651193415,"../info":1571651193416,"../utils/router":1571651193431,"../mixins/relation":1571651193447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1571651193540, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _sidebar = _interopRequireDefault(require("../sidebar"));

var _sidebarItem = _interopRequireDefault(require("../sidebar-item"));

var _createNamespace = (0, _utils.createNamespace)('tree-select'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function TreeSelect(h, props, slots, ctx) {
  var height = props.height,
      items = props.items,
      mainActiveIndex = props.mainActiveIndex,
      activeId = props.activeId;
  var selectedItem = items[mainActiveIndex] || {};
  var subItems = selectedItem.children || [];
  var isMultiple = Array.isArray(activeId);

  function isActiveItem(id) {
    return isMultiple ? activeId.indexOf(id) !== -1 : activeId === id;
  }

  var Navs = items.map(function (item) {
    return h(_sidebarItem.default, {
      "attrs": {
        "dot": item.dot,
        "info": item.info,
        "title": item.text,
        "disabled": item.disabled
      },
      "class": [bem('nav-item'), item.className]
    });
  });

  function Content() {
    if (slots.content) {
      return slots.content();
    }

    return subItems.map(function (item) {
      return h("div", {
        "key": item.id,
        "class": ['van-ellipsis', bem('item', {
          active: isActiveItem(item.id),
          disabled: item.disabled
        })],
        "on": {
          "click": function click() {
            if (!item.disabled) {
              var newActiveId = item.id;

              if (isMultiple) {
                newActiveId = activeId.slice();
                var index = newActiveId.indexOf(item.id);

                if (index !== -1) {
                  newActiveId.splice(index, 1);
                } else if (newActiveId.length < props.max) {
                  newActiveId.push(item.id);
                }
              }

              (0, _functional.emit)(ctx, 'click-item', item);
              (0, _functional.emit)(ctx, 'update:active-id', newActiveId); // compatible for old usage, should be removed in next major version

              (0, _functional.emit)(ctx, 'itemclick', item);
            }
          }
        }
      }, [item.text, isActiveItem(item.id) && h(_icon.default, {
        "attrs": {
          "name": "checked",
          "size": "16px"
        },
        "class": bem('selected')
      })]);
    });
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "style": {
      height: (0, _utils.addUnit)(height)
    }
  }, (0, _functional.inherit)(ctx)]), [h(_sidebar.default, {
    "class": bem('nav'),
    "attrs": {
      "activeKey": mainActiveIndex
    },
    "on": {
      "change": function change(index) {
        (0, _functional.emit)(ctx, 'click-nav', index);
        (0, _functional.emit)(ctx, 'update:main-active-index', index); // compatible for old usage, should be removed in next major version

        (0, _functional.emit)(ctx, 'navclick', index);
      }
    }
  }, [Navs]), h("div", {
    "class": bem('content')
  }, [Content()])]);
}

TreeSelect.props = {
  max: {
    type: Number,
    default: Infinity
  },
  items: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  height: {
    type: [Number, String],
    default: 300
  },
  activeId: {
    type: [Number, String, Array],
    default: 0
  },
  mainActiveIndex: {
    type: Number,
    default: 0
  }
};

var _default2 = createComponent(TreeSelect);

exports.default = _default2;
}, function(modId) { var map = {"../utils":1571651193393,"../utils/functional":1571651193405,"../icon":1571651193415,"../sidebar":1571651193513,"../sidebar-item":1571651193514}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1571651193391);
})()
//# sourceMappingURL=index.js.map