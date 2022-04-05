import 'package:flutter/material.dart';

class ProfileDetail extends StatelessWidget {
  final String title;
  final String content;

  const ProfileDetail({Key? key, required this.title, required this.content})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(2),
          child: Text(title, textAlign: TextAlign.left),
        ),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(2),
          decoration: BoxDecoration(
            border: Border.all(width: 2.0),
            borderRadius: BorderRadius.all(
              Radius.circular(5.0),
            ),
          ),
          child: Text(
            content,
            style: TextStyle(),
          ),
        ),
      ],
    );
  }
}
