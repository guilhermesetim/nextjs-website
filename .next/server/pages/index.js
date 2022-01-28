"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/nav-tab-menu.js":
/*!************************************!*\
  !*** ./components/nav-tab-menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UnstyledTabsCustomized)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_base_TabsUnstyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/base/TabsUnstyled */ \"@mui/base/TabsUnstyled\");\n/* harmony import */ var _mui_base_TabsUnstyled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_base_TabsUnstyled__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_base_TabsListUnstyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/base/TabsListUnstyled */ \"@mui/base/TabsListUnstyled\");\n/* harmony import */ var _mui_base_TabsListUnstyled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_base_TabsListUnstyled__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_base_TabPanelUnstyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base/TabPanelUnstyled */ \"@mui/base/TabPanelUnstyled\");\n/* harmony import */ var _mui_base_TabPanelUnstyled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_base_TabPanelUnstyled__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base/ButtonUnstyled */ \"@mui/base/ButtonUnstyled\");\n/* harmony import */ var _mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_base_TabUnstyled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/base/TabUnstyled */ \"@mui/base/TabUnstyled\");\n/* harmony import */ var _mui_base_TabUnstyled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_base_TabUnstyled__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst blue = {\n    50: '#F0F7FF',\n    100: '#C2E0FF',\n    200: '#80BFFF',\n    300: '#66B2FF',\n    400: '#3399FF',\n    500: '#007FFF',\n    600: '#0072E5',\n    700: '#0059B2',\n    800: '#004C99',\n    900: '#003A75'\n};\nconst Tab = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_base_TabUnstyled__WEBPACK_IMPORTED_MODULE_7___default()))`\n  font-family: IBM Plex Sans, sans-serif;\n  color: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: bold;\n  background-color: transparent;\n  width: 100%;\n  padding: 12px 16px;\n  margin: 6px 6px;\n  border: none;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n\n  &:hover {\n    background-color: ${blue[400]};\n  }\n\n  &:focus {\n    color: #fff;\n    border-radius: 3px;\n    outline: 2px solid ${blue[200]};\n    outline-offset: 2px;\n  }\n\n  &.${_mui_base_TabUnstyled__WEBPACK_IMPORTED_MODULE_7__.tabUnstyledClasses.selected} {\n    background-color: ${blue[50]};\n    color: ${blue[600]};\n  }\n\n  &.${_mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_6__.buttonUnstyledClasses.disabled} {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n`;\nconst TabPanel = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_base_TabPanelUnstyled__WEBPACK_IMPORTED_MODULE_5___default()))`\n  width: 100%;\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n`;\nconst TabsList = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_base_TabsListUnstyled__WEBPACK_IMPORTED_MODULE_4___default()))`\n  min-width: 320px;\n  background-color: ${blue[500]};\n  border-radius: 8px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: space-between;\n  margin: 0px 40px;\n`;\nfunction UnstyledTabsCustomized() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_base_TabsUnstyled__WEBPACK_IMPORTED_MODULE_3___default()), {\n        defaultValue: 0,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabsList, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n                        children: \"Principal\"\n                    }, void 0, false, {\n                        fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n                        children: \"Servi\\xe7os\"\n                    }, void 0, false, {\n                        fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n                        children: \"Galeria\"\n                    }, void 0, false, {\n                        fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n                        children: \"Depoimentos\"\n                    }, void 0, false, {\n                        fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                value: 0,\n                children: \"um\"\n            }, void 0, false, {\n                fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                value: 1,\n                children: \"dois\"\n            }, void 0, false, {\n                fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                value: 2,\n                children: \"tres\"\n            }, void 0, false, {\n                fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                value: 3,\n                children: \"quatro\"\n            }, void 0, false, {\n                fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/components/nav-tab-menu.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi10YWItbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDTTtBQUNhO0FBQ1E7QUFDQTtBQUNPO0FBQ087QUFFdkUsS0FBSyxDQUFDUSxJQUFJLEdBQUcsQ0FBQztBQUNaLE1BQUUsRUFBRSxDQUFTO0FBQ2IsT0FBRyxFQUFFLENBQVM7QUFDZCxPQUFHLEVBQUUsQ0FBUztBQUNkLE9BQUcsRUFBRSxDQUFTO0FBQ2QsT0FBRyxFQUFFLENBQVM7QUFDZCxPQUFHLEVBQUUsQ0FBUztBQUNkLE9BQUcsRUFBRSxDQUFTO0FBQ2QsT0FBRyxFQUFFLENBQVM7QUFDZCxPQUFHLEVBQUUsQ0FBUztBQUNkLE9BQUcsRUFBRSxDQUFTO0FBQ2hCLENBQUM7QUFFRCxLQUFLLENBQUNDLEdBQUcsR0FBR1IsbURBQU0sQ0FBQ0ssOERBQVcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztzQkFnQlYsRUFBRUUsSUFBSSxDQUFDLEdBQUcsRUFBRTs7Ozs7O3VCQU1YLEVBQUVBLElBQUksQ0FBQyxHQUFHLEVBQUU7Ozs7SUFJL0IsRUFBRUQsOEVBQTJCLENBQUM7c0JBQ1osRUFBRUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtXQUN0QixFQUFFQSxJQUFJLENBQUMsR0FBRyxFQUFFOzs7SUFHbkIsRUFBRUgsb0ZBQThCLENBQUM7Ozs7QUFJckM7QUFFQSxLQUFLLENBQUNPLFFBQVEsR0FBR1gsbURBQU0sQ0FBQ0csbUVBQWdCLEVBQUU7Ozs7QUFJMUM7QUFFQSxLQUFLLENBQUNTLFFBQVEsR0FBR1osbURBQU0sQ0FBQ0UsbUVBQWdCLEVBQUU7O29CQUV0QixFQUFFSyxJQUFJLENBQUMsR0FBRyxFQUFFOzs7Ozs7O0FBT2hDO0FBRWUsUUFBUSxDQUFDTSxzQkFBc0IsR0FBRyxDQUFDO0lBQ2hELE1BQU0sNkVBQ0haLCtEQUFZO1FBQUNhLFlBQVksRUFBRSxDQUFDOzt3RkFDMUJGLFFBQVE7O2dHQUNOSixHQUFHO2tDQUFDLENBQVM7Ozs7OztnR0FDYkEsR0FBRztrQ0FBQyxDQUFROzs7Ozs7Z0dBQ1pBLEdBQUc7a0NBQUMsQ0FBTzs7Ozs7O2dHQUNYQSxHQUFHO2tDQUFDLENBQVc7Ozs7Ozs7Ozs7Ozt3RkFFakJHLFFBQVE7Z0JBQUNJLEtBQUssRUFBRSxDQUFDOzBCQUFFLENBQUU7Ozs7Ozt3RkFDckJKLFFBQVE7Z0JBQUNJLEtBQUssRUFBRSxDQUFDOzBCQUFFLENBQUk7Ozs7Ozt3RkFDdkJKLFFBQVE7Z0JBQUNJLEtBQUssRUFBRSxDQUFDOzBCQUFFLENBQUk7Ozs7Ozt3RkFDdkJKLFFBQVE7Z0JBQUNJLEtBQUssRUFBRSxDQUFDOzBCQUFFLENBQU07Ozs7Ozs7Ozs7OztBQUdoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYtdGFiLW1lbnUuanM/YzViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5pbXBvcnQgVGFic1Vuc3R5bGVkIGZyb20gJ0BtdWkvYmFzZS9UYWJzVW5zdHlsZWQnO1xuaW1wb3J0IFRhYnNMaXN0VW5zdHlsZWQgZnJvbSAnQG11aS9iYXNlL1RhYnNMaXN0VW5zdHlsZWQnO1xuaW1wb3J0IFRhYlBhbmVsVW5zdHlsZWQgZnJvbSAnQG11aS9iYXNlL1RhYlBhbmVsVW5zdHlsZWQnO1xuaW1wb3J0IHsgYnV0dG9uVW5zdHlsZWRDbGFzc2VzIH0gZnJvbSAnQG11aS9iYXNlL0J1dHRvblVuc3R5bGVkJztcbmltcG9ydCBUYWJVbnN0eWxlZCwgeyB0YWJVbnN0eWxlZENsYXNzZXMgfSBmcm9tICdAbXVpL2Jhc2UvVGFiVW5zdHlsZWQnO1xuXG5jb25zdCBibHVlID0ge1xuICA1MDogJyNGMEY3RkYnLFxuICAxMDA6ICcjQzJFMEZGJyxcbiAgMjAwOiAnIzgwQkZGRicsXG4gIDMwMDogJyM2NkIyRkYnLFxuICA0MDA6ICcjMzM5OUZGJyxcbiAgNTAwOiAnIzAwN0ZGRicsXG4gIDYwMDogJyMwMDcyRTUnLFxuICA3MDA6ICcjMDA1OUIyJyxcbiAgODAwOiAnIzAwNEM5OScsXG4gIDkwMDogJyMwMDNBNzUnLFxufTtcblxuY29uc3QgVGFiID0gc3R5bGVkKFRhYlVuc3R5bGVkKWBcbiAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnMsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIG1hcmdpbjogNnB4IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ymx1ZVs0MDBdfTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdXRsaW5lOiAycHggc29saWQgJHtibHVlWzIwMF19O1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICAmLiR7dGFiVW5zdHlsZWRDbGFzc2VzLnNlbGVjdGVkfSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtibHVlWzUwXX07XG4gICAgY29sb3I6ICR7Ymx1ZVs2MDBdfTtcbiAgfVxuXG4gICYuJHtidXR0b25VbnN0eWxlZENsYXNzZXMuZGlzYWJsZWR9IHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuYDtcblxuY29uc3QgVGFiUGFuZWwgPSBzdHlsZWQoVGFiUGFuZWxVbnN0eWxlZClgXG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogSUJNIFBsZXggU2Fucywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbmA7XG5cbmNvbnN0IFRhYnNMaXN0ID0gc3R5bGVkKFRhYnNMaXN0VW5zdHlsZWQpYFxuICBtaW4td2lkdGg6IDMyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JsdWVbNTAwXX07XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDBweCA0MHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVW5zdHlsZWRUYWJzQ3VzdG9taXplZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8VGFic1Vuc3R5bGVkIGRlZmF1bHRWYWx1ZT17MH0+XG4gICAgICA8VGFic0xpc3Q+XG4gICAgICAgIDxUYWI+UHJpbmNpcGFsPC9UYWI+XG4gICAgICAgIDxUYWI+U2VydmnDp29zPC9UYWI+XG4gICAgICAgIDxUYWI+R2FsZXJpYTwvVGFiPlxuICAgICAgICA8VGFiPkRlcG9pbWVudG9zPC9UYWI+XG4gICAgICA8L1RhYnNMaXN0PlxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXswfT51bTwvVGFiUGFuZWw+XG4gICAgICA8VGFiUGFuZWwgdmFsdWU9ezF9PmRvaXM8L1RhYlBhbmVsPlxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXsyfT50cmVzPC9UYWJQYW5lbD5cbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17M30+cXVhdHJvPC9UYWJQYW5lbD5cbiAgICA8L1RhYnNVbnN0eWxlZD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJUYWJzVW5zdHlsZWQiLCJUYWJzTGlzdFVuc3R5bGVkIiwiVGFiUGFuZWxVbnN0eWxlZCIsImJ1dHRvblVuc3R5bGVkQ2xhc3NlcyIsIlRhYlVuc3R5bGVkIiwidGFiVW5zdHlsZWRDbGFzc2VzIiwiYmx1ZSIsIlRhYiIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJUYWJQYW5lbCIsIlRhYnNMaXN0IiwiVW5zdHlsZWRUYWJzQ3VzdG9taXplZCIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav-tab-menu.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_tab_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-tab-menu */ \"./components/nav-tab-menu.js\");\n\n\n\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-f41ec5060c53574a\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-f41ec5060c53574a\",\n                    children: \"Barbearia Fernandes\"\n                }, void 0, false, {\n                    fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/pages/index.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f41ec5060c53574a\",\n                children: \"header.jsx-f41ec5060c53574a{height:200px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\nfunction HomePage() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_tab_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/guilhermesetim/Documents/Projetos-GitHub/barbearia-fernandes/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRDtTQUd0REMsTUFBTSxHQUFFLENBQUM7SUFHZixNQUFNLDZFQUFDOzt3RkFFREMsQ0FBTTs7b0hBQ0ZDLENBQUU7OzhCQUFDLENBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQWFuQyxDQUFDO0FBSWMsUUFBUSxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUVoQyxNQUFNOzt3RkFFR0gsTUFBTTs7Ozs7d0ZBQ05ELGdFQUFzQjs7Ozs7OztBQUtuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVW5zdHlsZWRUYWJzQ3VzdG9taXplZCBmcm9tICcuLi9jb21wb25lbnRzL25hdi10YWItbWVudSc7XG5cblxuZnVuY3Rpb24gSGVhZGVyKCl7XG4gICAgXG5cbiAgIHJldHVybihcbiAgICA8PlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPkJhcmJlYXJpYSBGZXJuYW5kZXM8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICAgIFxuXG4gICApXG4gICBcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgPFVuc3R5bGVkVGFic0N1c3RvbWl6ZWQvPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvPlxuICAgIClcblxufVxuICAiXSwibmFtZXMiOlsiVW5zdHlsZWRUYWJzQ3VzdG9taXplZCIsIkhlYWRlciIsImhlYWRlciIsImgxIiwiSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@mui/base/ButtonUnstyled":
/*!*******************************************!*\
  !*** external "@mui/base/ButtonUnstyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/base/ButtonUnstyled");

/***/ }),

/***/ "@mui/base/TabPanelUnstyled":
/*!*********************************************!*\
  !*** external "@mui/base/TabPanelUnstyled" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/base/TabPanelUnstyled");

/***/ }),

/***/ "@mui/base/TabUnstyled":
/*!****************************************!*\
  !*** external "@mui/base/TabUnstyled" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/base/TabUnstyled");

/***/ }),

/***/ "@mui/base/TabsListUnstyled":
/*!*********************************************!*\
  !*** external "@mui/base/TabsListUnstyled" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/base/TabsListUnstyled");

/***/ }),

/***/ "@mui/base/TabsUnstyled":
/*!*****************************************!*\
  !*** external "@mui/base/TabsUnstyled" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/base/TabsUnstyled");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();