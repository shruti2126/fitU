import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, FlatList, ImageBackground, } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

import SimpleLinearRegression from 'ml-regression-simple-linear';
import SleepfactCard from '../components/SleepFactCard';
import {
    ScatterChart, Scatter, XAxis, ComposedChart, Tooltip, Legend, ResponsiveContainer,
    YAxis, CartesianGrid, Line
} from 'recharts';

const { width } = Dimensions.get('window');

const x = [412, 403, 375, 371, 379, 415, 427, 420, 401, 389, 376, 354];
const y = [0, -3, -2, -4, -9, -11, -15, -21, -20, -22, -25, -34];
const z = ['412', '403', '375', '371', '379', '415', '427', '420', '401', '389', '376', '354']

const regression = new SimpleLinearRegression(x, y);

regression.slope // 2
regression.intercept // -1
regression.coefficients // [-1, 2]

regression.predict(3); // 5
regression.computeX(3.5); // 2.25

const values0 = regression.predict(200);
const values1 = regression.predict(500);

const data = [
    { x: 412, y: 0 },
    { x: 403, y: -3 },
    { x: 375, y: -2 },
    { x: 371, y: -4 },
    { x: 379, y: -9 },
    { x: 415, y: -11 },
    { x: 427, y: -15 },
    { x: 420, y: -21 },
    { x: 401, y: -20 },
    { x: 389, y: -22 },
    { x: 376, y: -25 },
    { x: 354, y: -34 },
    { x: 200, yval: values0 },
    { x: 500, yval: values1 },
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
                            <Text style={styles.title}>Your sleep time vs. weight changes</Text>
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

                                <XAxis dataKey="x" type="number" label={{ value: 'Sleep duration', position: 'bottom', offset: 0 }} />
                                <YAxis unit="lb" type="number" label={{ value: 'Net weight loss/gain', angle: -90, position: 'insideLeft' }} />
                                <Scatter name="" dataKey="y" fill="red" />
                                <Line dataKey="yval" stroke="green" dot={false} activeDot={false} legendType="none" />
                            </ComposedChart>
                        </View>

                        <View style={styles.title_header}>
                            <Text style={styles.question}>Statistics to display</Text>
                        </View>

                        <View style={styles.regresVert}>
                            <Text style={styles.setColorWhite}>Your sleep duration account for
                                <Text style={styles.setColorRed}><div><pre>{r2.toFixed(3)}% </pre></div>
                                </Text>
                            </Text>
                            <Text style={styles.setColorWhite}> of your weight loss/gain based on current data</Text>
                        </View>

                        <View style={styles.title_header}>
                            <Text style={styles.question}>Questions or Doubts...?</Text>
                        </View>
                        <View style={styles.cardstru}>
                            <Text style={styles.item}>Q: Since increased step counts contribute to better sleep quality, would sleep be endogeneous? (i.e. sleep
                                is not that important in controlling weight?)</Text>
                            <Text style={styles.answer}>Not at all -- </Text>
                            <Text style={styles.item}>A: Sleep duration and quality are still statistical significant with respect to weight loss in experiments!</Text>
                        </View>
                        <View style={styles.title_header}>
                            <Text style={styles.title}>Fun Facts</Text>
                        </View>
                        <View style={styles.cardstru}>
                            <FlatList
                                data={[
                                    { key: '① There is inverse association between sleep duration and BMI index' },
                                    { key: '② Each hour increase in total sleep time = 30% reduction in obesity incident' },
                                    { key: '③ Sleeping < 6h has 6% higher probability of obesity' },
                                    { key: '④ Sleeping > 8h has 2% higher probability of obesity' },
                                    { key: '⑤ Sleeping 6-8h -- best for controlling your weight' },
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

// export default CorrelationSleep;

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
    answer: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        alignContent: 'space-between',
        justifyContent: 'space-between',
        fontSize: 20,
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
    image: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%'
        // blurRadius: 50
    },
    regresStat: {
        backgroundColor: 'paleturquoise',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
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