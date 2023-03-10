import React from 'react';
import { TextInput } from 'react-native-paper';
import ActionButton from './ActionButton';
import ToggleAllCheckbox from './ToggleAllCheckBox';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => context.actions[getEnterKeyAction(context)](context),
	Escape: (context) => context.actions.setInput(''),
};

const Input = (context) => {
	const { state, actions } = context;

	return (
		<TextInput
			label="Enter The Task"
			role="input"
			value={ state.input }
			onChangeText={ (text) => actions.setInput(text) }
			onKeyPress={ (evt) => {
				actionKeys[evt.code] && actionKeys[evt.code](context);
			} }
			right={ ActionButton(context) }
			left={ <ToggleAllCheckbox { ...context }/> }
		/>
	);
};

export default Input;
