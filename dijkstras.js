export const graph = {
  Hyderabad: {
    Warangal: 5,
    Nizamabad: 3
  },

  Warangal: {
    Karimnagar: 2
  },

  Nizamabad: {
    Bangalore: 10
  },

  Karimnagar: {
    Bangalore: 4
  },

  Bangalore: {}
};

export function shortestPath(start, end) {
  const distances = {};
  const visited = {};
  const previous = {};

  for (let city in graph) {
    distances[city] = Infinity;
    previous[city] = null;
  }

  distances[start] = 0;

  while (true) {
    let closestNode = null;
    let smallestDistance = Infinity;

    for (let city in distances) {
      if (
        !visited[city] &&
        distances[city] < smallestDistance
      ) {
        smallestDistance = distances[city];
        closestNode = city;
      }
    }

    if (closestNode === null) {
      break;
    }

    visited[closestNode] = true;

    for (let neighbor in graph[closestNode]) {
      let distance =
        distances[closestNode] +
        graph[closestNode][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = closestNode;
      }
    }
  }

  const path = [];
  let current = end;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    distance: distances[end],
    path
  };
}