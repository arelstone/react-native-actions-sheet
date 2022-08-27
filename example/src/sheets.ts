import ExampleSheet from './examplesheet';
import ConfirmSheet from './confirm';
import {registerSheet} from '../..';
import Sheet from './bugsheet';
const s = Sheet;
// Register your Sheet component.
/**
 * Registering the sheets here because otherwise sheet closes on
 * hot reload during development.
 */
registerSheet('confirm-sheet', ConfirmSheet, 'global', 'local');
registerSheet('example-sheet', ExampleSheet, 'local');

export {};

/**
 * Since we are not importing our Sheets in any component or file, we want to make sure
 * they are bundled by the JS bundler. Hence we will import this file in App.js.
 */
