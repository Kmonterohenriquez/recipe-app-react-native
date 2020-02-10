import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
export default function App() {
	const [result, setResult] = useState([]);

	useEffect(() => {
		getRecipe();
		console.log('get recipes'), [];
	});
	async function getRecipe() {
		const API_KEY = '123';
		const APP_ID = '123';
		const search_for = 'chicken';

		await axios
			.get(
				`https://api.edamam.com/search?q=${search_for}&app_id=${APP_ID}&app_key=
			${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
			)
			.then(res => setResult(res.data));
		// .catch(err => console.log(err))
	}

	console.log(result);
	const [count, setCount] = useState(0);
	return (
		<View style={styles.container}>
			<Text>Counter using React Native</Text>
			<Button title='-' onPress={() => setCount(count - 1)} />
			<Text>{count}</Text>
			<Button title='+' onPress={() => setCount(count + 1)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 40,
		justifyContent: 'space-between'
	}
});
