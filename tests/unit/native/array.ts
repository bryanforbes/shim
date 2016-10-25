import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import has from '../../../src/support/has';

registerSuite({
	name: 'native/array',
	'verify API'(this: any) {
		if (!has('es6-array-from')) {
			this.skip('No native support');
		}
		const dfd = this.async();
		(<any> require)([ 'src/native/array' ], dfd.callback((array: any) => {
			assert.isFunction(array.from);
			assert.isFunction(array.of);
			assert.isFunction(array.copyWithin);
			assert.isFunction(array.fill);
			assert.isFunction(array.find);
			assert.isFunction(array.findIndex);
			assert.isFunction(array.includes);
			assert.strictEqual(Object.keys(array).length, 7);
		}));
	}
});
