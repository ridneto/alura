"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var Relogio;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            Relogio = function Relogio() {
                var _this = this;

                _classCallCheck(this, Relogio);

                this._segundos = 0;

                setInterval(function () {
                    console.log(++_this._segundos);
                }, 1000);
            };
        }
    };
});
//# sourceMappingURL=Relogio.js.map