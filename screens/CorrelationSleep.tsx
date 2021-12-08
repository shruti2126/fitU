import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, FlatList, } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

import Plot from 'react-plotly.js';
import SimpleLinearRegression from 'ml-regression-simple-linear';
import SleepfactCard from '../components/SleepFactCard';

const { width } = Dimensions.get('window');

const x = [412, 403, 375, 371, 379, 415, 427, 420, 401, 389, 376, 354];
const y = [143, 152, 155, 157, 156, 162, 166, 168, 173, 176, 174, 177];
const z = ['412.33', '403', '375', '371', '379', '415', '427', '420', '401', '389', '376', '354']
const line = {
    labels: z,
    datasets: [
        {
            data: y,
            strokeWidth: 2, // optional
        },
    ],
};

const regression = new SimpleLinearRegression(x, y);

regression.slope // 2
regression.intercept // -1
regression.coefficients // [-1, 2]

regression.predict(3); // 5
regression.computeX(3.5); // 2.25

regression.toString(); // 'f(x) = 2 * x - 1'

regression.score(x, y);
// { r: 1, r2: 1, chi2: 0, rmsd: 0 }

const json = regression.toJSON();
// { name: 'simpleLinearRegression', slope: 2, intercept: -1 }
const loaded = SimpleLinearRegression.load(json);
loaded.predict(5) // 9

const CorrelationSleep = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.title_header}>
                    <Text style={styles.title}>Your sleep time vs. weight changes</Text>
                </View>
                <View>
                    <LineChart
                        data={line}
                        width={Dimensions.get('window').width} // from react-native
                        height={220}
                        // yAxisLabel={'$'}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#fb8c00',
                            backgroundGradientTo: '#ffa726',
                            // decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => 'olivedrab',
                            style: {
                                borderRadius: 16
                            }
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </View>
                <View style={styles.title_header}>
                    <Text style={styles.question}>Statistics to display</Text>
                </View>
                <View style={styles.regresStat}>
                    <View style={styles.regrCard}>
                        <Text >The slope of the regression is  </Text>
                    </View>
                    <div><pre>{JSON.stringify(regression.slope)}</pre></div>
                </View>
                <View style={styles.regresStat}>
                    <View style={styles.cardstru}>
                        <Text>The r-square statistics is  </Text>
                    </View>
                    <div><pre>{JSON.stringify(regression.score(x, y)['r2'])}</pre></div>
                </View>

                <View style={styles.title_header}>
                    <Text style={styles.question}>Questions or Doubts...?</Text>
                </View>
                <View style={styles.cardstru}>
                    <Text >Since increased step counts contribute to better sleep quality, would sleep be endogeneous? (i.e. sleep
                        is not that important in controlling weight?)</Text>
                    <Text style={styles.title}>Not at all!</Text>
                    <Text >Sleep duration and quality are still statistical significant with respect to weight loss in experiments!</Text>
                </View>
                <View style={styles.title_header}>
                    <Text style={styles.title}>Fun Facts</Text>
                </View>
                <View style={styles.cardstru}>
                    <FlatList
                        data={[
                            { key: 'There is inverse association between sleep duration and BMI index' },
                            { key: 'Each hour increase in total sleep time = 30% reduction in obesity incident' },
                            { key: 'Sleeping < 6h has 6% higher probability of obesity' },
                            { key: 'Sleeping > 8h has 2% higher probability of obesity' },
                            { key: 'Sleeping 6-8h -- best for controlling your weight' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default CorrelationSleep;

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'seashell',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15,
        marginBottom: 5,
        marginTop: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    regrCard: {
        width: '300'
    },
    regresStat: {
        backgroundColor: 'paleturquoise',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width: '300'
    },
    cardstru: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'paleturquoise',
    },
    title_header: {
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    common: {
        width: 320,
        height: 200,
    },
    question: {
        color: 'black',
        fontWeight: '700',
        fontSize: 20
    },
    title: {
        color: 'black',
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