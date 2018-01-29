var app = app || {};

// Calculator model responsible for business logic of calculator
app.Calculator = Backbone.Model.extend({

    defaults: {
        // result stores result of operation and showns it to display
        result: '0',
        // operand1 stores operand 1
        operand1: '0',
        // operand1 stores operand 2
        operand2: '0',
        // operand1 stores operation
        operation: '',
        // reset flag to switch between operations
        reset: false,
        // operationFlag to know that operation received as last command
        operationFlag: false
    },

    // receives pressed button value
    command: function (character) {
        // convert type to string
        var character = character + '';
        // test if it is digits or dot
        if (/[0-9\.]/.test(character)) {
            this.digitCommand(character);
        } else {
            switch (character) {
                case '/':
                case '*':
                case '-':
                case '+':
                    this.operationCommand(character);
                    break;
                case '=':
                    this.calculateCommand(true);
                    break;
                case 'C':
                    this.clearCommand(character);
                    break;
            }
        }
    },

    concat: function (operand, digit) {
        // logic for digits
        if (operand === '0' && digit === '.') {
            return operand + digit;
        } else if (operand === '0' && digit === '0') {
            return operand;
        } else if (operand === '0' && digit !== '0' && digit !== '.') {
            return digit;
        } else if (operand && operand.indexOf('.') != -1 && digit === '.') {
            return operand;
        } else {
            return operand + '' + digit;
        }
    },

    // receives digit value from button
    digitCommand: function (digit) {
        var value;
        if (this.attributes.reset) {
            if (this.attributes.operationFlag) {
                value = this.concat('0', digit);
                this.set({
                    result: value,
                    operand2: value,
                    reset: false
                });
            } else {
                value = this.concat('0', digit);
                this.set({
                    result: value,
                    operand1: value,
                    reset: false
                });
            }
        } else {
            if (this.attributes.operationFlag) {
                value = this.concat(this.attributes.operand2, digit);
                this.set({
                    result: value,
                    operand2: value
                });
            } else {
                value = this.concat(this.attributes.operand1, digit);
                this.set({
                    result: value,
                    operand1: value
                });                
            }
        }
    },

    // receives operation value from button
    operationCommand: function (operation) {
        if (this.attributes.operationFlag && this.attributes.operand2 != 0) {
            this.calculateCommand();
        }
        this.set({
            operation: operation,
            reset: true,
            operationFlag: true
        });
    },

    // clears model
    clearCommand: function () {
        this.set(this.defaults);
    },

    // main calculator logic
    // isResultButton indicate that "=" button pressed
    calculateCommand: function (isResultButton) {
        var value;
        if (this.attributes.operation) {
            this.attributes.operand2 = this.attributes.operand2 == 0 ? this.attributes.operand1 : this.attributes.operand2;
            // convert operands to float
            this.attributes.operand1 = parseFloat(this.attributes.operand1);
            this.attributes.operand2 = parseFloat(this.attributes.operand2);
            switch (this.attributes.operation) {
                case '/':
                    value = this.attributes.operand1 / this.attributes.operand2;
                    break;
                case '*':
                    value = this.attributes.operand1 * this.attributes.operand2;
                    break;
                case '-':
                    value = this.attributes.operand1 - this.attributes.operand2;
                    break;
                case '+':
                    value = this.attributes.operand1 + this.attributes.operand2;
                    break;
            }
            // fix for .33 - .03 = 0.30000000000000004
            value = (Math.round(value * 100000000000000) / 100000000000000) + '';
            // convert float values to string
            this.attributes.operand1 = this.attributes.operand1 + '';
            this.attributes.operand2 = this.attributes.operand2 + '';
            if (isResultButton) {
                this.set({
                    result: value,
                    operand1: value,
                    operand2: this.attributes.operand2,
                    reset: true,
                    operationFlag: false
                });
            } else {
                this.set({
                    result: value,
                    operand1: value,
                    operand2: '0',
                    reset: true,
                    operationFlag: true
                });
            }
        }
    }

});
