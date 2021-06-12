import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {hideProgressModal} from "../state/actions/questions_modal";
import ButtonComponent, {ButtonStyle} from "./ButtonComponent";
import {CalculateProgress} from "../utility/progress";
import {
    BusinessProcessesQuestions, CorporateCultureQuestions, CorporateGovernanceQuestions,
    DevelopmentStrategyQuestions, FinanceAndPlanningQuestions,
    OrganizationalStructureQuestions,
    PersonalManagementQuestions
} from "../data/stages";


function ProgressComponent(props) {
    const currentStage = useSelector(state => state.currentStage)
    const currentCall = useSelector(state => state.currentCall.title)
    const allStages = useSelector(state => state.progress.allStages)
    let progress = CalculateProgress(currentStage, allStages);

    const dispatch = useDispatch()
    return (
        <View style={styles.rect}>
            <Text style={styles.infoText}>Прогресс</Text>
            <View style={{flex: 1, marginVertical: 20}}>
                <Text style={styles.descriptionText}>
                    answered = {progress.allCalls.answered};
                    unanswered = {progress.allCalls.unanswered};
                    correct = {progress.allCalls.correct};
                    wrong = {progress.allCalls.wrong};
                    total = {progress.allCalls.total};
                </Text>
            </View>
            <Text style={styles.infoText}>Управление персоналом</Text>
            <View style={{flex: 1, marginVertical: 5}}>
                <Text style={styles.descriptionText}>
                    answered = {progress[PersonalManagementQuestions].answered};
                    unanswered = {progress[PersonalManagementQuestions].unanswered};
                    correct = {progress[PersonalManagementQuestions].correct};
                    wrong = {progress[PersonalManagementQuestions].wrong};
                    total = {progress[PersonalManagementQuestions].total};
                </Text>
            </View>
            <Text style={styles.infoText}>Стратегия развития</Text>
            <View style={{flex: 1, marginVertical: 5}}>
                <Text style={styles.descriptionText}>
                    answered = {progress[DevelopmentStrategyQuestions].answered};
                    unanswered = {progress[DevelopmentStrategyQuestions].unanswered};
                    correct = {progress[DevelopmentStrategyQuestions].correct};
                    wrong = {progress[DevelopmentStrategyQuestions].wrong};
                    total = {progress[DevelopmentStrategyQuestions].total};
                </Text>
            </View>
            <Text style={styles.infoText}>Организационная структура</Text>
            <View style={{flex: 1, marginVertical: 5}}>
                <Text style={styles.descriptionText}>
                    answered = {progress[OrganizationalStructureQuestions].answered};
                    unanswered = {progress[OrganizationalStructureQuestions].unanswered};
                    correct = {progress[OrganizationalStructureQuestions].correct};
                    wrong = {progress[OrganizationalStructureQuestions].wrong};
                    total = {progress[OrganizationalStructureQuestions].total};
                </Text>
            </View>
            <Text style={styles.infoText}>Бизнес процессы</Text>
            <View style={{flex: 1, marginVertical: 5}}>
                <Text style={styles.descriptionText}>
                    answered = {progress[BusinessProcessesQuestions].answered};
                    unanswered = {progress[BusinessProcessesQuestions].unanswered};
                    correct = {progress[BusinessProcessesQuestions].correct};
                    wrong = {progress[BusinessProcessesQuestions].wrong};
                    total = {progress[BusinessProcessesQuestions].total};
                </Text>
            </View>
            <Text style={styles.infoText}>Корпоративная культура</Text>
            <View style={{flex: 1, marginVertical: 5}}>
                <Text style={styles.descriptionText}>
                    answered = {progress[CorporateCultureQuestions].answered};
                    unanswered = {progress[CorporateCultureQuestions].unanswered};
                    correct = {progress[CorporateCultureQuestions].correct};
                    wrong = {progress[CorporateCultureQuestions].wrong};
                    total = {progress[CorporateCultureQuestions].total};
                </Text>
            </View>
            <Text style={styles.infoText}>Финансовое планирование</Text>
            <View style={{flex: 1, marginVertical: 5}}>
                <Text style={styles.descriptionText}>
                    answered = {progress[FinanceAndPlanningQuestions].answered};
                    unanswered = {progress[FinanceAndPlanningQuestions].unanswered};
                    correct = {progress[FinanceAndPlanningQuestions].correct};
                    wrong = {progress[FinanceAndPlanningQuestions].wrong};
                    total = {progress[FinanceAndPlanningQuestions].total};
                </Text>
            </View>
            <Text style={styles.infoText}>Корпоративное управление</Text>
            <View style={{flex: 1, marginVertical: 5}}>
                <Text style={styles.descriptionText}>
                    answered = {progress[CorporateGovernanceQuestions].answered};
                    unanswered = {progress[CorporateGovernanceQuestions].unanswered};
                    correct = {progress[CorporateGovernanceQuestions].correct};
                    wrong = {progress[CorporateGovernanceQuestions].wrong};
                    total = {progress[CorporateGovernanceQuestions].total};
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => dispatch(hideProgressModal())}
                style={ButtonStyle}
            >
                <ButtonComponent text="Закрыть"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rect: {
        flex: 1,
        backgroundColor: "white",
        maxWidth: 400,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 3,
        borderColor: "rgba(254,164,38,1)",
        alignSelf: "center"
    },
    infoText: {
        fontFamily: "montserrat-800",
        color: "rgba(68,68,68,1)",
        alignSelf: "center"
    },
    descriptionText: {
        fontFamily: "montserrat-500",
        color: "rgba(68,68,68,1)",
        alignSelf: "center"
    },
})

export default ProgressComponent;
