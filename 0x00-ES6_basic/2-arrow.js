export default function NeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this
this.addNeighborhood = newNeighborhood => {
	this.sanFranciscoNeighborhoods.push(newNeighborhood);
	return this.sanFranciscoNeighborhoods;
  };
}

