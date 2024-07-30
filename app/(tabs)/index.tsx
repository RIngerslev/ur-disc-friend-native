import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Animated, PanResponder } from 'react-native';

export default function HomeScreen() {
  const [touchPoints, setTouchPoints] = useState([]);
  const [highlightedPoint, setHighlightedPoint] = useState(null);
  const timer = useRef(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event) => handleTouch(event),
      onPanResponderMove: (event) => handleTouch(event),
      onPanResponderRelease: () => setTouchPoints([]),
    })
  ).current;

  const handleTouch = (event) => {
    const touches = event.nativeEvent.touches;
    const points = [];
    for (let i = 0; i < touches.length; i++) {
      points.push({ id: touches[i].identifier, x: touches[i].pageX, y: touches[i].pageY });
    }
    setTouchPoints(points);
  };

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
        <View
          key={point.id}
          style={[
            styles.circle,
            { left: point.x - 25, top: point.y - 25 },
            highlightedPoint && highlightedPoint.id === point.id && styles.highlightedCircle,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A9E9F',
  },
  circle: {
    position: 'absolute',
    width: 125,
    height: 125,
    borderRadius: 100,
    backgroundColor: '#4f6367',
  },
  highlightedCircle: {
    backgroundColor: '#FE5F55',
  },
});
