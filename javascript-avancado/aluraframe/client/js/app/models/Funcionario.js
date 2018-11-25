"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Funcionario, funcionario, proxy;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            Funcionario = function () {
                function Funcionario(email) {
                    _classCallCheck(this, Funcionario);

                    this._email = email;
                }

                _createClass(Funcionario, [{
                    key: "email",
                    get: function get() {
                        return this._email;
                    },
                    set: function set(email) {
                        this._email = email;
                    }
                }]);

                return Funcionario;
            }();

            funcionario = new Funcionario("ridineu@hotmail.com");
            proxy = new Proxy(funcionario, {
                get: function get(target, prop, receiver) {
                    console.log("a propriedade \"" + prop + "\" foi interceptada");
                    return target[prop];
                },
                set: function set(target, prop, value, receiver) {
                    console.log("antigo valor: " + target[prop] + "; novo valor: " + value);
                    return Reflect.set(target, prop, value, receiver);
                }
            });
        }
    };
});
//# sourceMappingURL=Funcionario.js.map