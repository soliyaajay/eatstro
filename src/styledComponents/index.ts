import styled from 'styled-components/native'
import { Colors } from '../common/Colors'


export const Container = styled.View`
	flex: 1;
	background-color: ${Colors.ScreenBG};
	padding:0px 5% 0px 5%;
`;
export const SafeContainer = styled.SafeAreaView`
	flex: 1;
	background-color: ${Colors.ScreenBG};
`;
export const H1 = styled.Text`
	font-size:30px;
	color: ${props => props.color};
	line-height:33px;
`;
export const H3 = styled.Text`
	font-size:18px;
	color: ${props => props.color};
	line-height:33px;
`;
export const NormalText = styled.Text`
	font-size:14px;
	color: ${props => props.color};
	line-height:16px;
`;