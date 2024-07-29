import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'

const TabBar = ({ state, descriptors, navigation }) => {
    const primaryColor = '#FE5F55'
    const secondColor = '#EEF5DB'
    
    const icons = {
        index: (props: any) => <FontAwesome6 name="hand-point-down" size={24} color={secondColor} {...props} />,
        dice: (props: any) => <MaterialCommunityIcons name="dice-multiple" size={24} color={secondColor} {...props} />,
        flip: (props: any) => <MaterialCommunityIcons name="hand-coin" size={24} color={secondColor} {...props} />,
    }


  return (
    <View style={styles.tabbarContainer}>
      <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          if(['_sitemap', '+not-found'].includes(route.name)) return null;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              style={styles.tabbarItem}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {
                  icons[route.name]({
                      color: isFocused ? primaryColor : secondColor
                  })
              }
              <Text style={{ 
                  color: isFocused ? primaryColor : secondColor, 
                  fontSize: 11,
              }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    tabbarContainer: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        paddingBottom: 25,
        backgroundColor: '#7A9E9F'
    },
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4f6367',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1,
        width: '90%',
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
    }
});

export default TabBar
