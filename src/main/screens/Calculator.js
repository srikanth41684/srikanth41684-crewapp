import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';

const numbers = [
  'C',
  '+/-',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '.',
  '0',
  '<',
  '=',
];

const Calculator = () => {
  const [commObj, setCommObj] = useState({
    calsiValue: '456465',
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgray',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            paddingTop: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
            }}>
            Calculator
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#000000',
                }}>
                {commObj.calsiValue}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              paddingTop: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 20,
                }}>
                {numbers.map((item, index) => {
                  return (
                    <TouchableWithoutFeedback key={index}>
                      <View
                        style={{
                          width: '20%',
                          backgroundColor: '#ffffff',
                          alignItems: 'center',
                          paddingVertical: 15,
                          borderRadius: 40,
                        }}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#000',
                          }}>
                          {item}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
