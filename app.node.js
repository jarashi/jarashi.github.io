module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(20);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(2);

  var _coreLocation = __webpack_require__(6);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(5);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(7);
    }, '/500': function _() {
      return __webpack_require__(8);
    }, '/about': function about() {
      return __webpack_require__(9);
    }, '/blog': function blog() {
      return __webpack_require__(10);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(11);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(12);
    }, '/': function _() {
      return __webpack_require__(13);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _nodeVibrant = __webpack_require__(19);

  var _nodeVibrant2 = _interopRequireDefault(_nodeVibrant);

  var _Flow = __webpack_require__(4);

  var _Flow2 = _interopRequireDefault(_Flow);

  var ColorPick = _react2['default'].createClass({
    displayName: 'ColorPick',

    getInitialState: function getInitialState() {
      return {
        vibrant: '#000000',
        muted: '#AC9D80',
        darkVibrant: '#5D331E',
        darkMuted: '#626950',
        lightVibrant: '#FBF2EB',
        lightMuted: '#AEA891'
      };
    },
    componentDidMount: function componentDidMount() {

      var url = 'images/trophy/assets/Platinum.png';
      var v = new _nodeVibrant2['default'](url);
      v.getPalette((function (e, p) {
        //var x = p.Vibrant.getHex();

        var nv = p.Vibrant.getHex();

        var nm = p.Muted.getHex();
        var dv = p.DarkVibrant.getHex();
        var dm = p.DarkMuted.getHex();
        var lv = p.LightVibrant.getHex();
        var lm = p.LightMuted.getHex();
        //console.log(lm);
        this.setState({
          vibrant: nv,
          muted: nm,
          darkVibrant: dv,
          darkMuted: dm,
          lightVibrant: lv,
          lightMuted: lm
        });
      }).bind(this));
    },

    handleClick: function handleClick(event) {
      var url = event.currentTarget.src;
      var v = new _nodeVibrant2['default'](url);
      v.getPalette((function (e, p) {

        var nv = p.Vibrant == null ? '#FFF' : p.Vibrant.getHex();
        var nm = p.Muted == null ? '#FFF' : p.Muted.getHex();
        var dv = p.DarkVibrant == null ? '#FFF' : p.DarkVibrant.getHex();
        var dm = p.DarkMuted == null ? '#FFF' : p.DarkMuted.getHex();
        var lv = p.LightVibrant == null ? '#FFF' : p.LightVibrant.getHex();
        var lm = p.LightMuted == null ? '#FFF' : p.LightMuted.getHex();

        this.setState({
          vibrant: nv,
          muted: nm,
          darkVibrant: dv,
          darkMuted: dm,
          lightVibrant: lv,
          lightMuted: lm
        });
      }).bind(this));
    },
    render: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Flow2['default'], this.state),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('img', { src: 'images/face/face1.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face2.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face3.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face4.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face5.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face6.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face7.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face8.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face9.jpg', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/face/face10.jpg', width: '64px', height: '64px', onClick: this.handleClick })
        ),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('img', { src: 'images/avator/avator1.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator2.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator3.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator4.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator5.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator6.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator7.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator8.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator9.png', width: '64px', height: '64px', onClick: this.handleClick }),
          _react2['default'].createElement('img', { src: 'images/avator/avator10.png', width: '64px', height: '64px', onClick: this.handleClick })
        )
      );
    }
  });

  module.exports = ColorPick;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  //import { StaggeredMotion, Motion, spring } from 'react-motion';

  var Flow = _react2['default'].createClass({
    displayName: 'Flow',

    getDefaultProps: function getDefaultProps() {
      return {
        size: 64,
        fill: 'currentcolor',
        vibrant: '#E24D4A',
        muted: '#AC9D80',
        darkVibrant: '#5D331E',
        darkMuted: '#626950',
        lightVibrant: '#FBF2EB',
        lightMuted: '#AEA891'
      };
    },
    getInitialState: function getInitialState() {
      return {
        x: 0,
        y: 0
      };
    },
    handleMouseMove: function handleMouseMove(event) {

      //console.log(event.clientY);
      this.setState({
        x: event.clientX / 4,
        y: event.clientY / 4
      });
    },

    getPoints: function getPoints(val) {
      return '0,100 100,100 100,60 0,' + val;
    },

    render: function render() {
      var blendMode = {
        mixBlendMode: 'multiply'
      };
      var data = '0,100 100,100 100,60 0,' + ('' + this.state.y);

      return _react2['default'].createElement(
        'svg',
        { ref: 'svg', xmlns: 'http://www.w3.org/svg/2000', viewBox: '0 0 100 100', width: '100%', height: '320', preserveAspectRatio: 'none', onMouseMove: this.handleMouseMove },
        _react2['default'].createElement(
          'defs',
          null,
          _react2['default'].createElement(
            'linearGradient',
            { id: 'grad0', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
            _react2['default'].createElement('stop', { offset: '0%', stopColor: this.props.lightVibrant, stopOpacity: '1' }),
            _react2['default'].createElement('stop', { offset: '100%', stopColor: this.props.lightVibrant, stopOpacity: '0.5' })
          ),
          _react2['default'].createElement(
            'linearGradient',
            { id: 'grad1', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
            _react2['default'].createElement('stop', { offset: '0%', stopColor: this.props.lightMuted, stopOpacity: '1' }),
            _react2['default'].createElement('stop', { offset: '100%', stopColor: this.props.lightMuted, stopOpacity: '0.5' })
          ),
          _react2['default'].createElement(
            'linearGradient',
            { id: 'grad2', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
            _react2['default'].createElement('stop', { offset: '0%', stopColor: this.props.vibrant, stopOpacity: '1' }),
            _react2['default'].createElement('stop', { offset: '100%', stopColor: this.props.vibrant, stopOpacity: '0.5' })
          ),
          _react2['default'].createElement(
            'linearGradient',
            { id: 'grad3', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
            _react2['default'].createElement('stop', { offset: '0%', stopColor: this.props.muted, stopOpacity: '1' }),
            _react2['default'].createElement('stop', { offset: '100%', stopColor: this.props.muted, stopOpacity: '0.5' })
          ),
          _react2['default'].createElement(
            'linearGradient',
            { id: 'grad4', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
            _react2['default'].createElement('stop', { offset: '0%', stopColor: this.props.darkVibrant, stopOpacity: '1' }),
            _react2['default'].createElement('stop', { offset: '100%', stopColor: this.props.darkVibrant, stopOpacity: '0.5' })
          ),
          _react2['default'].createElement(
            'linearGradient',
            { id: 'grad5', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
            _react2['default'].createElement('stop', { offset: '0%', stopColor: this.props.darkMuted, stopOpacity: '1' }),
            _react2['default'].createElement('stop', { offset: '100%', stopColor: this.props.darkMuted, stopOpacity: '0.5' })
          )
        ),
        _react2['default'].createElement('rect', { width: '100%', height: '100%', fill: 'url(#grad0)' }),
        _react2['default'].createElement('polygon', { points: '0,100 100,100 100,20 0,40', fill: 'url(#grad1)', style: blendMode }),
        _react2['default'].createElement('polygon', { points: '0,100 100,100 100,40 0,30', fill: 'url(#grad2)', style: blendMode }),
        _react2['default'].createElement('polygon', { points: '0,100 100,100 100,30 0,50', fill: 'url(#grad3)', style: blendMode }),
        _react2['default'].createElement('polygon', { points: '0,100 100,100 100,50 0,80', fill: 'url(#grad4)', style: blendMode }),
        _react2['default'].createElement('polygon', { points: '0,100 100,100 100,90 0,60', fill: 'url(#grad5)', style: blendMode })
      );
    }
  });

  module.exports = Flow;

  /*
  <svg ref="svg" {...this.props} onMouseMove={this.handleMouseMove.bind(this)}>

  </svg>
  <path d="M 0 0 Q 10 90 100 100 Q 110 10 200 0" fill="purple"/>
  <linearGradient
     id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stopColor="#feb" />
    <stop offset="50%" stopColor="#fc4" />
    <stop offset="51%" stopColor="#fb0" />
    <stop offset="100%" stopColor="#fd9" />
  </linearGradient>
  <rect x="300" y="300" width="200" height="80" rx="10" ry="10" fill="url(#grad1)" />


  <defs>
    <linearGradient id="grad0" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.lightVibrant} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.lightMuted} stopOpacity="1"/>
    </linearGradient>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.vibrant} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.muted} stopOpacity="1"/>
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.darkVibrant} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.darkMuted} stopOpacity="1"/>
    </linearGradient>
  </defs>
  <rect width='100%' height='100%' fill="url(#grad0)" />
    <Motion defaultStyle={{x: 0}} style={{x: spring(this.state.y)}}>
      {value => <polygon points={this.getPoints(value.x)} fill="url(#grad1)" style={blendMode}/>}
    </Motion>

  <polygon points="0,100 100,100 100,40 0,50" fill="url(#grad2)" style={blendMode} />

  <defs>
    <linearGradient id="grad0" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.lightVibrant} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.lightVibrant} stopOpacity="0.5"/>
    </linearGradient>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.lightMuted} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.lightMuted} stopOpacity="0.5"/>
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.vibrant} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.vibrant} stopOpacity="0.5"/>
    </linearGradient>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.muted} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.muted} stopOpacity="0.5"/>
    </linearGradient>
    <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.darkVibrant} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.darkVibrant} stopOpacity="0.5"/>
    </linearGradient>
    <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={this.props.darkMuted} stopOpacity="1"/>
      <stop offset="100%" stopColor={this.props.darkMuted} stopOpacity="0.5"/>
    </linearGradient>
  </defs>
  <rect width='100%' height='100%' fill="url(#grad0)" />
  <polygon points="0,100 100,100 100,20 0,40" fill="url(#grad1)" style={blendMode}/>
  <polygon points="0,100 100,100 100,40 0,30" fill="url(#grad2)" style={blendMode}/>
  <polygon points="0,100 100,100 100,30 0,50" fill="url(#grad3)" style={blendMode} />
  <polygon points="0,100 100,100 100,50 0,80" fill="url(#grad4)" style={blendMode} />
  <polygon points="0,100 100,100 100,90 0,60" fill="url(#grad5)" style={blendMode} />




  */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(14);

  //import Navigation from '../Navigation';

  var _ColorPick = __webpack_require__(3);

  var _ColorPick2 = _interopRequireDefault(_ColorPick);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement(_ColorPick2['default'], null)
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;

  /*
  <Navigation />
  {children}
  */
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(2);

  var _historyLibCreateBrowserHistory = __webpack_require__(16);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(17);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(18);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Home Page'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(15)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #f7f7f7;\n  color: #333;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 15 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("node-vibrant");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);