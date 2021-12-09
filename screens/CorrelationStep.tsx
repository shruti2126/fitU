import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, FlatList, ImageBackground, } from 'react-native';
import {
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
import SimpleLinearRegression from 'ml-regression-simple-linear';
import {
    ScatterChart, Scatter, XAxis, ComposedChart, Tooltip, Legend, ResponsiveContainer,
    YAxis, CartesianGrid, Line
} from 'recharts';

// import StepChart from '../components/StepChart';

const x = [6704, 4033, 4572, 5633, 5148, 8077, 9803, 7926, 9012, 10256, 10447, 10892];
const y = [0, -3, -2, -4, -9, -11, -15, -21, -20, -22, -25, -34];
const z = ['6704', '4033', '4572', '5633', '5148', '8077', '9803', '7926', '9012', '10256', '10447', '10892']

const regression = new SimpleLinearRegression(x, y);

regression.slope // 2
regression.intercept // -1
regression.coefficients // [-1, 2]

regression.predict(3); // 5
regression.computeX(3.5); // 2.25

const values0 = regression.predict(0);
const values1 = regression.predict(12000);

const data = [
    { x: 6704, y: 0 },
    { x: 4033, y: -3 },
    { x: 4572, y: -2 },
    { x: 5633, y: -4 },
    { x: 5148, y: -9 },
    { x: 8077, y: -11 },
    { x: 9803, y: -15 },
    { x: 7926, y: -21 },
    { x: 9012, y: -20 },
    { x: 10256, y: -22 },
    { x: 10447, y: -25 },
    { x: 10892, y: -34 },
    { x: 0, yval: values0 },
    { x: 12000, yval: values1 },
];

regression.toString(); // 'f(x) = 2 * x - 1'

regression.score(x, y);
// { r: 1, r2: 1, chi2: 0, rmsd: 0 }
const r2 = regression.score(x, y)['r2'] * 100

const json = regression.toJSON();
// { name: 'simpleLinearRegression', slope: 2, intercept: -1 }
const loaded = SimpleLinearRegression.load(json);
loaded.predict(5) // 9

export default class CorrelationStep extends PureComponent {
    render() {
        return (
            <ImageBackground source={require('../LoginBackground.jpeg')} style={styles.image}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.title_header}>
                            <Text style={styles.title}>Your steps vs. weight changes</Text>
                        </View>
                        <View style={styles.graphContainer}>
                            <ComposedChart
                                width={400}
                                height={400}
                                data={data}
                                margin={{
                                    top: 40,
                                    right: 60,
                                    bottom: 40,
                                    left: 40,
                                }}>
                                <CartesianGrid stroke="#f5f5f5" />
                                <Tooltip />

                                <XAxis dataKey="x" type="number" label={{ value: 'Step counts', position: 'bottom', offset: 0 }} />
                                <YAxis unit="lb" type="number" label={{ value: 'Net weight loss/gain', angle: -90, position: 'insideLeft' }} />
                                <Scatter name="" dataKey="y" fill="red" />
                                <Line dataKey="yval" stroke="green" dot={false} activeDot={false} legendType="none" />
                            </ComposedChart>
                        </View>
                        <View style={styles.title_header}>
                            <Text style={styles.question}>Statistics to display</Text>
                        </View>

                        <View style={styles.regresVert}>
                            <Text style={styles.setColorWhite}>Your step counts account for
                                <Text style={styles.setColorRed}><div><pre>{r2.toFixed(3)}% </pre></div>
                                </Text>
                            </Text>
                            <Text style={styles.setColorWhite}> of your weight loss/gain based on current data</Text>
                        </View>

                        <View style={styles.title_header}>
                            <Text style={styles.question}>Questions or Doubts...?</Text>
                        </View>
                        <View style={styles.cardstru}>
                            <Text style={styles.item}>Q: People lose weight because they consume calories, but walking doesn't seem to be an efficient consumption</Text>
                            <Text style={styles.answer}>Not at all -- </Text>
                            <Text style={styles.item}>A: Walking doesn't only burn calories, but it helps preserve lean muscles, train patience, and improves your mood</Text>
                        </View>
                        <View style={styles.title_header}>
                            <Text style={styles.title}>Fun Facts</Text>
                        </View>

                        <View style={styles.cardstru}>
                            <FlatList
                                data={[
                                    { key: '① Every 1000 steps burns 30-40 calories' },
                                    { key: '② Increased steps counts affect many other indicators, such as sleep quality and declination of anxiety' },
                                    { key: '③ Walking less than 10000 steps per day won\'t have much effect on weight loss' },
                                    { key: '④ At least 15000 steps daily is optimal to shed off a few pounds to lose weight!' },
                                ]}
                                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
};

// export default CorrelationStep;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#FFFFFF'
        // backgroundColor: 'aliceblue'
        backgroundColor: 'rgba( 0, 0, 0, 0.6 )'
    },
    graphContainer: {
        backgroundColor: 'paleturquoise',
        marginTop: 5,
        width: '100%',
        // paddingBottom: 15,
    },
    setColorWhite: {
        alignContent: 'space-between',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    setColorRed: {
        color: 'red',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    regrCard: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    regresVert: {
        backgroundColor: 'paleturquoise',
        flexDirection: 'column',
        paddingBottom: 15,
        paddingTop: 15,
        marginBottom: 5,
        marginTop: 5,
        width: '100%',
        textAlign: 'center',
    },
    regresStat: {
        backgroundColor: 'paleturquoise',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    answer: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        alignContent: 'space-between',
        justifyContent: 'space-between',
        fontSize: 20,
    },
    cardstru: {
        // paddingLeft: 10,
        // paddingRight: 10,
        paddingBottom: 15,
        paddingTop: 15,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'paleturquoise',
    },
    title_header: {
        color: 'white',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    common: {
        width: 320,
        height: 200,
    },
    question: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%'
        // blurRadius: 50
    },
    title: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    },
    item: {
        //backgroundColor: '#ffe4c4',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        alignContent: 'space-between',
        justifyContent: 'space-between',
    }
});