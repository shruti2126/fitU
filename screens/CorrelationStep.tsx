import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
import SimpleLinearRegression from 'ml-regression-simple-linear';

// import StepChart from '../components/StepChart';

const x = [6704, 4033, 4572, 5633, 5148, 8077, 9803, 7926, 9012, 10256, 10447, 10892];
const y = [143, 152, 155, 157, 156, 162, 166, 168, 173, 176, 174, 177];
const z = ['6704', '4033', '4572', '5633', '5148', '8077', '9803', '7926', '9012', '10256', '10447', '10892']


const regression = new SimpleLinearRegression(x, y);

regression.slope // 2
regression.intercept // -1
regression.coefficients // [-1, 2]

regression.predict(3); // 5
regression.computeX(3.5); // 2.25
const values = regression.predict(x);
regression.toString(); // 'f(x) = 2 * x - 1'

regression.score(x, y);
// { r: 1, r2: 1, chi2: 0, rmsd: 0 }

const json = regression.toJSON();
// { name: 'simpleLinearRegression', slope: 2, intercept: -1 }
const loaded = SimpleLinearRegression.load(json);
loaded.predict(5) // 9

const line = {
    labels: z,
    datasets: [
        {
            data: values,
            strokeWidth: 2, // optional
        },
    ],
};

const CorrelationStep = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.title_header}>
                    <Text style={styles.title}>Your steps vs. weight changes</Text>
                </View>
                {/* <View>
                    <StepChart />
                </View> */}
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
                    <View>
                        <Text >The slope of the regression is  </Text>
                    </View>
                    <div><pre>{JSON.stringify(regression.slope)}</pre></div>
                </View>
                <View style={styles.regresStat}>
                    <View>
                        <Text>The r-square statistics is  </Text>
                    </View>
                    <div><pre>{JSON.stringify(regression.score(x, y)['r2'])}</pre></div>
                </View>
                <View style={styles.title_header}>
                    <Text style={styles.question}>Questions or Doubts...?</Text>
                </View>
                <View style={styles.cardstru}>
                    <Text >People lose weight because they consume calories, but walking doesn't seem to be an efficient consumption</Text>
                    <Text style={styles.title}>Not at all!</Text>
                    <Text >Walking doesn't only burn calories, but it helps preserve lean muscles, train patience, and improves your mood</Text>
                </View>
                <View style={styles.title_header}>
                    <Text style={styles.title}>Fun Facts</Text>
                </View>
                <View style={styles.cardstru}>
                    <FlatList
                        data={[
                            { key: 'Research shows that every 1000 steps burns 30-40 calories' },
                            { key: 'Increased steps counts affect many other indicators, such as sleep quality and declination of anxiety' },
                            { key: 'Actually at least 15000 steps daily is optimal to shed off a few pounds to lose weight!' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default CorrelationStep;

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