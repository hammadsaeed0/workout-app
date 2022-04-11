import { View, Text, ScrollView , Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FireIcon from 'react-native-vector-icons/SimpleLineIcons';
import HumanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import Style from './Style'

const WeightStrech = () => {
  return (
    <View style={Style.Container}>
      <View style={Style.txtCon}>
        <Text style={Style.setHeadTxt}>Pushups</Text>
      </View>

      <View style={Style.imgCon}>
        <Image 
        style={{width:'100%', height:'100%'}}
        source={require('../../../Images/PushupsG.gif')}
        />
      </View>

      <View style={Style.StatusCon}>
            <View style={Style.innerTxt}>
                  <Icon name="clockcircleo" size={15} color="white" />
                  <Text style={{color:'white', fontSize: 15}}>5 min</Text>
            </View>
            <View style={Style.innerTxt}>
                 <FireIcon name="fire" size={15} color="white" />
                  <Text style={{color:'white', fontSize: 15}}>145</Text>
            </View>
            <View style={Style.innerTxt}>
                  <HumanIcon name="human" size={15} color="white" />
                  <Text style={{color:'white', fontSize: 15}}>Beginner</Text>
            </View>
      </View>


        <View style={Style.BodyCon}>
              <Text style={Style.headingText}>Pushups Workout</Text>
              <Text style={Style.bodyTxt}> Some workouts even give up to 72 hours of rest before repeating the same exercises. But boot camp in every branch has used push-ups as a daily exercise, either in organized PT or punishment for not conforming to regulations. Throughout the years of experiencing military training either as a student or instructor, I noticed people were typically stronger in push-ups by the end of training.</Text>
              <Text style={Style.bodyTxt}>
              Do 200 push-ups in as few sets as possible in addition to your regularly scheduled workout of cardio exercises. You still can do upper-body workouts on these days if you are already on a program. This is a supplemental 200 push-ups using maximum repetition sets (4 x 50, 8 x 25 ... it's your choice how you get to 200)
              </Text>
        </View>

    </View>
  )
}

export default WeightStrech