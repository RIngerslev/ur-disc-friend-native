import React, { useRef, useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, PanResponder } from 'react-native';

const Circle = React.memo(({ point, highlighted }) => (
  <View
    style={[
      styles.circle,
      { left: point.x - 65, top: point.y - 65 }, // Adjust the position to center the circle
      highlighted && styles.highlightedCircle,
    ]}
  />
));

export default function HomeScreen() {
  const [touchPoints, setTouchPoints] = useState([]);
  const [highlightedPoint, setHighlightedPoint] = useState(null);
  const timer = useRef(null);

  const handleTouch = useCallback((event) => {
    const touches = event.nativeEvent.touches;
    const points = [];
    for (let i = 0; i < touches.length; i++) {
      points.push({ id: touches[i].identifier, x: touches[i].pageX, y: touches[i].pageY });
    }
    setTouchPoints(points);
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event) => handleTouch(event),
      onPanResponderMove: (event) => handleTouch(event),
      onPanResponderRelease: () => setTouchPoints([]),
      onPanResponderTerminationRequest: () => false,
      onShouldBlockNativeResponder: () => true,
    })
  ).current;

  useEffect(() => {
    if (touchPoints.length > 1) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * touchPoints.length);
        setHighlightedPoint(touchPoints[randomIndex]);
      }, 1000);
    } else {
      setHighlightedPoint(null);
    }

    return () => clearTimeout(timer.current);
  }, [touchPoints]);

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {touchPoints.map((point) => (
        <Circle
          key={point.id}
          point={point}
          highlighted={highlightedPoint && highlightedPoint.id === point.id}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A9E9F',
    userSelect: 'none',
  },
  circle: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65, // Half of the width and height to make it a circle
    backgroundColor: '#4f6367',
    userSelect: 'none',
  },
  highlightedCircle: {
    backgroundColor: '#FE5F55',
    userSelect: 'none',
  },
});
