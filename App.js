import {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddModalHandler() {
        setModalIsVisible(true);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoal) => [
            ...currentCourseGoal,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);

        endAddGoalHandler();
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoal) => {
            return courseGoals.filter((goal) => goal.id !== id);
        });
    }
    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Button
                    title='Add New Goal'
                    color='#a065ec'
                    onPress={startAddModalHandler}
                />
                <GoalInput
                    visible={modalIsVisible}
                    onCancel={endAddGoalHandler}
                    onAddGoal={addGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                        alwaysBounceVertical={false}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a',
    },

    goalsContainer: {
        flex: 5,
    },
});
