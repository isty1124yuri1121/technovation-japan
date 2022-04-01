import 'package:flutter/material.dart';

class Farmer {
  final String id;
  final String name;
  final String location;
  final String favorites;
  final AssetImage image;

  const Farmer(this.id, this.name, this.location, this.favorites, this.image);
}
