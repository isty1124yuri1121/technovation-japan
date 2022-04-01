import 'package:flutter/material.dart';

import 'package:final_version/models/farmer.dart';

class FarmerViewPage extends StatelessWidget {
  final Farmer farmer;

  const FarmerViewPage({Key? key, required this.farmer}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ButtonStyle style = ElevatedButton.styleFrom(
      textStyle: const TextStyle(fontSize: 20),
    );
    return Scaffold(
      appBar: AppBar(
        title: Text('${farmer.name}'),
      ),
      body: Text('${farmer.location}'),
    );
  }
}
